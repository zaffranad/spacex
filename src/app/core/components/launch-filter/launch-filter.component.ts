import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LaunchFilter } from './pipes/launch-filter.pipe';

@Component({
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrls: ['./launch-filter.component.scss']
})
export class LaunchFilterComponent implements OnInit {

  @ViewChild('formulaire', {static: true}) formulaire;

  @Output()
  onFilterChange = new EventEmitter<any>();

  filter: LaunchFilter = new LaunchFilter();

  constructor() {
  }

  ngOnInit() {
    this.formulaire.valueChanges.subscribe(() => {
      this.onFilterChange.emit(this.filter);
    });
  }

}
