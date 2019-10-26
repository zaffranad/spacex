import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../model/launch';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent {

  @Input()
  launch: Launch;

  constructor() {
  }

}
