import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../model/launch';
import { PictureService } from '../../services/tools/picture.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent {

  @Input()
  launch: Launch;

  showAllDescription = false;

  constructor(
    private pictureService: PictureService
  ) {
  }

  setFallbackImageForPatch() {
    this.launch.missionPatch = this.pictureService.getRandomPictureUrl();
  }

}
