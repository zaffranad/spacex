import { Component, OnInit } from '@angular/core';
import { Launch } from '../../../../core/model/launch';
import { LaunchFilter } from '../../../../core/components/launch-filter/pipes/launch-filter.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
