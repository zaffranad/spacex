import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/shared/services/spacex-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  launches = [];

  constructor(
    private spacex: SpacexApiService
  ) { }

  ngOnInit() {
    this.spacex.getLaunches()
      .subscribe((res: Array<any>) => {
        this.launches = res;
      });
  }

}
