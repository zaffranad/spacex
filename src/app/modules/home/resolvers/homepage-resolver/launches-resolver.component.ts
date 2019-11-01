import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpacexLaunchResquester } from '../../../../core/services/spacex-launch-requester';
import { SpacexApiService } from '../../../../core/services/spacex-api.service';

@Injectable({providedIn: 'root'})
export class HomepageResolver implements Resolve<SpacexLaunchResquester> {

  constructor(
    private spacexApiService: SpacexApiService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpacexLaunchResquester> {
    const launchRequester = this.spacexApiService.getLaunchRequester();
    return launchRequester.fetchNext()
      .pipe(
        map(() => {
          return launchRequester;
        })
      );
  }


}
