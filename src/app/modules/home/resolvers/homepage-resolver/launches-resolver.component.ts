import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SxLaunchRequester } from '../../../../core/services/sx-launch-requester';
import { SxApiService } from '../../../../core/services/sx-api.service';

@Injectable({providedIn: 'root'})
export class HomepageResolver implements Resolve<SxLaunchRequester> {

  constructor(
    private spacexApiService: SxApiService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SxLaunchRequester> {
    const launchRequester = this.spacexApiService.getLaunchRequester();
    return launchRequester.fetchNext()
      .pipe(
        map(() => {
          return launchRequester;
        })
      );
  }


}
