import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { SpacexApiModel, SpacexApiRocket } from './spacex-api-model';
import {SpacexApiBuilder} from './spacex-api-builder';
import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';

@Injectable({
  providedIn: 'root',
})
export class SpacexApiService {

  private readonly ROOT = 'https://api.spacexdata.com/v3/';

  constructor(private http: HttpClient) {
  }

  getLaunches(): Observable<Array<Launch>> {
    return this.http.get(this.ROOT + 'launches')
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
