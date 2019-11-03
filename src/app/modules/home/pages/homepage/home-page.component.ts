import { Component, OnInit } from '@angular/core';
import { Launch } from '../../../../core/model/launch';
import { ActivatedRoute } from '@angular/router';
import { SpacexLaunchResquester } from '../../../../core/services/spacex-launch-requester';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  launches: Array<Launch> = [];

  private launchRequester: SpacexLaunchResquester;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.launchRequester = this.route.snapshot.data.launchRequester;
    this.launches = this.launchRequester.launches;
  }

  retrieveNext() {
    if (!this.launchRequester.isLastPage) {
      this.launchRequester.fetchNext()
        .subscribe(launches => this.launches = launches);
    }
  }

  retrievePrevious() {
    if (!this.launchRequester.isFirstPage) {
      this.launchRequester.fetchPrevious()
        .subscribe(launches => this.launches = launches);
    }
  }

  loadPage(pageNumber: number) {
    if (pageNumber !== this.launchRequester.currentPage) {
      this.launchRequester.fetchPage(pageNumber)
        .subscribe(launches => this.launches = launches);
    }
  }
}
