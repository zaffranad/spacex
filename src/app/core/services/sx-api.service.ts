import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SxApiOptions, SxApiResponse, SxApiRocket } from './sx-api-launch';
import { SxApiBuilder } from './sx-api-builder';
import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';
import { SxLaunchRequester } from './sx-launch-requester';

@Injectable({
  providedIn: 'root',
})
export class SxApiService {

  constructor(private http: HttpClient) {
  }

  private readonly ROOT = 'https://api.spacexdata.com/v3/';

  public getLaunchRequester(): SxLaunchRequester {
    return new SxLaunchRequester(this);
  }

  getLaunches(options: SxApiOptions): Observable<SxApiResponse<Launch>> {
    return this.http.get(this.ROOT + 'launches/past', {observe: 'response', params: optionsToHttpParams(options)})
      .pipe(
        map((response: HttpResponse<any>) => {
          const total = response.headers.get('spacex-api-count');
          return new SxApiResponse<Launch>(Number(total), SxApiBuilder.buildLaunches(response.body));
        })
      );
  }

  getRocket(id: string): Observable<Rocket> {
    return this.http.get(this.ROOT + 'rockets/' + id)
      .pipe(
        map((response: SxApiRocket) => SxApiBuilder.buildRocket(response))
      );
  }
}

function optionsToHttpParams(options: SxApiOptions) {
  return new HttpParams()
    .set('order', 'desc')
    .set('limit', String(options.paginationLimit))
    .set('offset', String(options.paginationOffset));
}

