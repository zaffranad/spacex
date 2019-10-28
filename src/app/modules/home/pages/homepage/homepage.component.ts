import { Component, OnInit } from '@angular/core';
import { Launch } from '../../../../core/model/launch';
import { LaunchFilter } from '../../../../core/launch-filter/pipes/launch-filter.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  launches: Array<Launch> = [];
  filter: LaunchFilter = new LaunchFilter();

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.launches = this.route.snapshot.data.launches;
  }

  updateFilter(filter: LaunchFilter) {
    this.filter = filter;
  }
}
