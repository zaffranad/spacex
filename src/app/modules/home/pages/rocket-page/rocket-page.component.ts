import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rocket } from '../../../../core/model/rocket';
import { SxApiService } from '../../../../core/services/sx-api.service';

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
    private spacexApiService: SxApiService
  ) {
  }

  ngOnInit() {
    this.spacexApiService.getRocket(this.route.snapshot.paramMap.get('id'))
      .subscribe(r => this.rocket = r);
  }

}
