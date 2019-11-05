import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit {

  @Input()
  currentPage: number;

  @Input()
  pages: Array<number>;

  @Output()
  onNext = new EventEmitter<any>();

  @Output()
  onPrevious = new EventEmitter<any>();

  @Output()
  onPageChoice = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  retrievePrevious() {
    this.onPrevious.next();
  }

  retrieveNext() {
    this.onNext.next();
  }

  isFirstPage() {
    return this.pages && this.currentPage === this.pages[0];
  }


  isLastPage() {
    return this.pages && this.currentPage === this.pages[this.pages.length - 1];
  }

  onLoadPage(pageNumber: number) {
    this.onPageChoice.emit(pageNumber);
  }
}
