import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SpacexApiService } from '../../../../core/services/spacex-api.service';
import { Observable } from 'rxjs';
import { Launch } from '../../../../core/model/launch';

@Injectable({providedIn: 'root'})
export class HomepageResolver implements Resolve<Array<Launch>> {

  constructor(
    private spacexApiService: SpacexApiService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Launch>> | Promise<Array<Launch>> | Array<Launch> {
    return this.spacexApiService.getLaunches({paginationLimit: 5, paginationOffset: 0});
  }

}
