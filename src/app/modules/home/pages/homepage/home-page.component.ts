import { Component, OnInit } from '@angular/core';
import { Launch } from '../../../../core/model/launch';
import { ActivatedRoute } from '@angular/router';
import { SxLaunchRequester } from '../../../../core/services/sx-launch-requester';
import { SxApiService } from '../../../../core/services/sx-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  launches: Array<Launch> = [];

  private launchRequester: SxLaunchRequester;

  constructor(
    private spacexApiService: SxApiService
  ) {
  }

  ngOnInit() {
    this.launchRequester = this.spacexApiService.getLaunchRequester();
    this.launchRequester.fetchNext()
      .subscribe(launches => this.launches = launches);
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
