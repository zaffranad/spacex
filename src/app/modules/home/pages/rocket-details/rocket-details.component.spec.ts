import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetailsComponent } from './rocket-details.component';

describe('RocketDetailsComponent', () => {
  let component: RocketDetailsComponent;
  let fixture: ComponentFixture<RocketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
