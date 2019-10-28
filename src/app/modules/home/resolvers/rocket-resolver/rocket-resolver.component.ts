import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Rocket } from '../../../../core/model/rocket';
import { SpacexApiService } from '../../../../core/services/spacex-api.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RocketResolver implements Resolve<Rocket> {

  constructor(
    private spacexApiService: SpacexApiService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rocket> | Promise<Rocket> | Rocket {
    return this.spacexApiService.getRocket(route.paramMap.get('id'));
  }

}
