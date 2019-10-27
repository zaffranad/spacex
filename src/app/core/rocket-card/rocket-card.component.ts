import { Component, Input, OnInit } from '@angular/core';
import { Rocket } from '../model/rocket';

@Component({
  selector: 'app-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.scss']
})
export class RocketCardComponent implements OnInit {

  @Input()
  rocket: Rocket;

  constructor() {
  }

  ngOnInit() {
  }

}
