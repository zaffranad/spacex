import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics-ruban',
  templateUrl: './pics-ruban.component.html',
  styleUrls: ['./pics-ruban.component.scss']
})
export class PicsRubanComponent {
  @Input()
  max = 5;

  @Input()
  pics: Array<string>;

}
