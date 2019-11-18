import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LaunchCardComponent} from './launch-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Launch} from '../../model/launch';
import {Rocket} from '../../model/rocket';
import {PicsRubanComponent} from '../pics-ruban/pics-ruban.component';

describe('LaunchCardComponent', () => {
  let component: LaunchCardComponent;
  let fixture: ComponentFixture<LaunchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchCardComponent, PicsRubanComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.launch = new Launch();
    component.launch.rocket = new Rocket();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
