import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  // private _appRestService = inject(AppRestService);
  // private readonly _activatedRoute = inject(ActivatedRoute);
  // protected tableDisplayed = null;
  // title = 'schedule';
  // leagues: WritableSignal<League[]> = signal([]);
  // protected html = '';
  // public ngOnInit(): void {
  //   const queryParams = this._activatedRoute.snapshot.queryParams;
  //   console.log(this._activatedRoute.snapshot);
  //   console.log(queryParams);
  //   if ('liga' in queryParams) {
  //     console.log('ifffffffffffffffffffffffffffffffffffffff');
  //     switch (queryParams['liga']) {
  //       case '4':
  //         this.fetchData(this._appRestService.get4liga(), 'IV liga');
  //         break;
  //     }
  //   } else {
  //     console.log('elseeeeeeeeeeeeeeeeee');
  //     this.fetchData(this._appRestService.getOkregowka(), 'Klasa okręgowa');
  //     this.fetchData(this._appRestService.get4liga(), 'IV liga');
  //   }
  // }
  // protected fetchData(leagueEP: Observable<any>, leagueName: string): void {
  //   leagueEP.subscribe((data) => {
  //     const tables = this._getAllMatchTableElements(data);
  //     for (let table of tables) {
  //       let upcomingRound = false;
  //       Array.from(table.firstElementChild!.children).forEach((child) => {
  //         if (
  //           child &&
  //           child.hasAttribute('data-date') &&
  //           child.hasAttribute('data-away')
  //         ) {
  //           upcomingRound = true;
  //         }
  //       });
  //       if (upcomingRound) {
  //         this._fetchTableData(table, leagueName);
  //         break;
  //       }
  //     }
  //   });
  // }
  // private _getAllMatchTableElements(data: any) {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(data, 'text/html');
  //   return doc.querySelectorAll('table.main[cellpadding="1"]');
  // }
  // private _fetchTableData(table: Element, league: string) {
  //   let matches: Match[] = [];
  //   for (let tr of table.firstElementChild?.children ?? []) {
  //     if (tr.getAttribute('align') === 'left') {
  //       let newMatch: Match = {
  //         homeTeam: tr.children[0].innerHTML,
  //         awayTeam: tr.children[2].innerHTML,
  //         date: tr.children[3].innerHTML,
  //       };
  //       matches.push(newMatch);
  //     }
  //   }
  //   this.leagues.update((leagues) => [...leagues, { name: league, matches }]);
  //   console.log('leagues:', this.leagues());
  // }
}
