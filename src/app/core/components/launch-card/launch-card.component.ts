import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../model/launch';
import {PictureService} from '../../services/tools/picture.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent {

  @Input()
  launch: Launch;

  constructor(
    private pictureService: PictureService

  ) {
  }

  setFallbackImageForPatch() {
    this.launch.missionPatch = this.pictureService.getRandomPictureUrl();
  }
  setFallbackImageForRocket() {
    this.launch.rocket.images = this.launch.rocket.images || [];
    this.launch.rocket.images.push(this.pictureService.getRandomPictureUrl());
  }
}
