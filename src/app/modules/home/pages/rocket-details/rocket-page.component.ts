import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.rocket = this.route.snapshot.data.rocket;
  }

}
