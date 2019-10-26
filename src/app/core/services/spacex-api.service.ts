import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SpacexApiLaunch} from './spacex-api-launch';
import {SpacexApiUtils} from './spacex-api-utils';

@Injectable({
  providedIn: 'root',
})
export class SpacexApiService {

  private readonly ROOT = 'https://api.spacexdata.com/v3/';

  constructor(private http: HttpClient) {
  }

  getLaunches(): Observable<Array<any>> {
    return this.http.get(this.ROOT + 'launches')
      .pipe(
        map((response: Array<SpacexApiLaunch>) => SpacexApiUtils.buildLaunches(response))
      );
  }
}

