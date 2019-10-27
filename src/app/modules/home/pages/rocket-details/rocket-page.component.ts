import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpacexApiService } from '../../../../core/services/spacex-api.service';
import { switchMap } from 'rxjs/operators';
import { Rocket } from '../../../../core/model/rocket';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-page.component.html',
  styleUrls: ['./rocket-page.component.scss']
})
export class RocketPageComponent implements OnInit {

  @Input()
  rocket: Rocket;

  constructor(
    private route: ActivatedRoute,
    private spacexApiService: SpacexApiService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.spacexApiService.getRocket(params.get('id'))
      )
    ).subscribe(rocket => this.rocket = rocket);
  }

}
