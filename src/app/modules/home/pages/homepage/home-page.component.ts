import { Component, OnInit } from '@angular/core';
import { Launch } from '../../../../core/model/launch';
import { LaunchFilter } from '../../../../core/components/launch-filter/pipes/launch-filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { SpacexLaunchResquester } from '../../../../core/services/spacex-launch-requester';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  launches: Array<Launch> = [];
  filter: LaunchFilter = new LaunchFilter();
  private launchRequester: SpacexLaunchResquester;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.launchRequester = this.route.snapshot.data.launchRequester;
    this.launches = this.launchRequester.getLaunchesRetrieved();
  }

  updateFilter(filter: LaunchFilter) {
    this.filter = filter;
  }

  retrieveNext() {
    this.launchRequester.fetchNext()
      .subscribe(launches => this.launches = launches);
  }

  retrievePrevious() {
    this.launchRequester.fetchPrevious()
      .subscribe(launches => this.launches = launches);
  }
}
