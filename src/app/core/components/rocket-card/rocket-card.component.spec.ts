import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCardComponent } from './rocket-card.component';
import { Observable, of } from 'rxjs';
import { Rocket } from '../../model/rocket';
import { SxApiService } from '../../services/sx-api.service';

describe('RocketCardComponent', () => {
  let component: RocketCardComponent;
  let fixture: ComponentFixture<RocketCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.rocket = new Rocket('1', 'ROCKIT');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
