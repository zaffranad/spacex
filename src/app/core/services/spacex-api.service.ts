import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpacexApiLaunch, SpacexApiRocket } from './spacex-api-launch';
import { SpacexApiBuilder } from './spacex-api-builder';
import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';
import { SpacexLaunchResquester } from './spacex-launch-requester';

export interface SpacesApiOptions {
  paginationOffset: number;
  paginationLimit: number;
}

export class SpacexApiResponse<T> {
  constructor(
    public total: number,
    public items: Array<T>
  ) {
  }
}

@Injectable({
  providedIn: 'root',
})
export class SpacexApiService {

  constructor(private http: HttpClient) {
  }

  private readonly ROOT = 'https://api.spacexdata.com/v3/';

  public getLaunchRequester(): SpacexLaunchResquester {
    return new SpacexLaunchResquester(this);
  }

  getLaunches(options: SpacesApiOptions): Observable<SpacexApiResponse<Launch>> {
    return this.http.get(this.ROOT + 'launches/past', {observe: 'response', params: optionsToHttpParams(options)})
      .pipe(
        map((response: HttpResponse<any>) => {
          const total = response.headers.get('spacex-api-count');
          return new SpacexApiResponse<Launch>(Number(total), SpacexApiBuilder.buildLaunches(response.body));
        })
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
    .set('order', 'desc')
    .set('limit', String(options.paginationLimit))
    .set('offset', String(options.paginationOffset));
}

