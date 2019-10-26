import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {SpacexApiService} from 'src/app/core/services/spacex-api.service';
import {Launch} from "../../../../core/model/launch";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  launches: Array<Launch> = [];

  constructor(
    private spacex: SpacexApiService
  ) {
  }

  ngOnInit() {
    this.spacex.getLaunches()
      .subscribe((res: Array<Launch>) => this.launches = res);
  }

}
