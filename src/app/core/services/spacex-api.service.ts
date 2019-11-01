import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpacexApiModel, SpacexApiRocket } from './spacex-api-model';
import { SpacexApiBuilder } from './spacex-api-builder';
import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';

export interface SpacesApiOptions {
  paginationOffset: number;
  paginationLimit: number;
}

@Injectable({
  providedIn: 'root',
})
export class SpacexApiService {

  constructor(private http: HttpClient) {
  }

  private readonly ROOT = 'https://api.spacexdata.com/v3/';

  getLaunches(options: SpacesApiOptions): Observable<Array<Launch>> {
    return this.http.get(this.ROOT + 'launches', {params: optionsToHttpParams(options)})
      .pipe(
        map((response: Array<SpacexApiModel>) => SpacexApiBuilder.buildLaunches(response))
      );
  }

  getRocket(id: string): Observable<Rocket> {
    return this.http.get(this.ROOT + 'rockets/' + id)
      .pipe(
        map((response: SpacexApiRocket) => SpacexApiBuilder.buildRocket(response))
      );
  }
}

function optionsToHttpParams(options: SpacesApiOptions) {
  return new HttpParams()
    .set('limit', String(options.paginationLimit))
    .set('offset', String(options.paginationOffset));
}

