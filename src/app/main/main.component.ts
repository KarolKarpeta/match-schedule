import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppRestService } from '../app-rest.service';
import { League } from '../models/league.interface';
import { Match } from '../models/match.interface';
import { PolishPipe } from '../models/tools/polish.pipe';
import '@angular/compiler';

export const LEAGUES = {
  Four: { queryParamList: ['4'], name: ['IV liga'], restParam: ['4'] },
  Okregowka: {
    queryParamList: [
      '5',
      'okregowka',
      'okr',
      'klasa-okregowa',
      'liga-okregowa',
    ],
    name: ['Klasa okręgowa'],
    restParam: ['5'],
  },
  A: {
    queryParamList: ['a', 'klasa-a', 'klasaa', 'a-klasa'],
    name: ['Klasa A, grupa: Kielce I', 'Klasa A, grupa: Kielce II'],
    restParam: ['a1', 'a2'],
  },
  B: {
    queryParamList: ['b', 'klasa-b', 'klasab', 'bklasa'],
    name: ['Klasa B, grupa: Kielce I', 'Klasa B, grupa: Kielce II'],
    restParam: ['b1', 'b2'],
  },
} as const;
type LeagueType = (typeof LEAGUES)[keyof typeof LEAGUES];

@Component({
  selector: 'app-root',
  imports: [PolishPipe, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
})
export class ScMainComponent implements OnInit {
  private _appRestService = inject(AppRestService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _platformId = inject(PLATFORM_ID);

  protected tableDisplayed = null;

  LEAGUES = LEAGUES;

  title = 'schedule';
  leagues: WritableSignal<League[]> = signal([]);

  protected html = '';
  entries = Object.entries(LEAGUES) as [string, LeagueType][];

  public ngOnInit(): void {
    console.log('Wersja 1.0.1');
    if (isPlatformBrowser(this._platformId)) {
      this._activatedRoute.queryParams.subscribe((params) => {
        this.leagues.set([]);
        const liga = params['liga'];
        let fetchAll = true;

        if (liga) {
          for (const [key, league] of this.entries) {
            if (league.queryParamList.includes(liga as never)) {
              this.fetchData(league);
              fetchAll = false;
            }
          }
        }

        if (fetchAll) {
          this.fetchData();
        }
      });
    }
  }

  protected fetchData(league?: LeagueType): void {
    if (!league) {
      for (const [key, league] of this.entries) {
        this._fetchDataforLeague(league);
      }
    } else {
      this._fetchDataforLeague(league);
    }
  }

  private _fetchDataforLeague(league: LeagueType): void {
    league.restParam.forEach((param, index) => {
      this._appRestService.getLeagueData(param).subscribe((data) => {
        const tables = this._getAllMatchTableElements(data);

        for (let table of tables) {
          let upcomingRound = false;
          Array.from(table.firstElementChild!.children).forEach((child) => {
            if (
              child &&
              child.hasAttribute('data-date') &&
              child.hasAttribute('data-away')
            ) {
              upcomingRound = true;
            }
          });

          if (!upcomingRound) {
            this._fetchTableData(table, league.name[index]);
            break;
          }
        }
      });
    });
  }

  private _getAllMatchTableElements(data: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    return doc.querySelectorAll('table.main[cellpadding="1"]');
  }

  private _fetchTableData(table: Element, league: string) {
    console.log('fetch upcoming: ', table, league);
    let matches: Match[] = [];
    for (let tr of table.firstElementChild?.children ?? []) {
      if (tr.getAttribute('align') === 'left' && tr.children.length > 3) {
        console.log('tr: ', tr);
        let newMatch: Match = {
          homeTeam: tr.children[0].innerHTML,
          awayTeam: tr.children[2].innerHTML,
          date: tr.children[3].innerHTML,
        };
        matches.push(newMatch);
      }
    }

    this.leagues.update((leagues) => [...leagues, { name: league, matches }]);
  }
}
