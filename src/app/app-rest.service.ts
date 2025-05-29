import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppRestService {
  private readonly _httpClient = inject(HttpClient);

  public getLeagueData(league: string) {
    return this._httpClient.get<any>('/api/getLeagueData', {
      params: new HttpParams().set('league', league),
    });
  }
}
