import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPageComponent } from './rocket-page.component';

describe('RocketDetailsComponent', () => {
  let component: RocketPageComponent;
  let fixture: ComponentFixture<RocketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
