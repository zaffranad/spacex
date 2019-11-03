import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPageComponent } from './rocket-page.component';
import { CoreModule } from '../../../../core/core.module';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SxApiService } from '../../../../core/services/sx-api.service';
import { Observable, of } from 'rxjs';
import { Rocket } from '../../../../core/model/rocket';

describe('RocketPageComponent', () => {
  let component: RocketPageComponent;
  let fixture: ComponentFixture<RocketPageComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: convertToParamMap({id: 1})
    }
  } as ActivatedRoute;

  const fakeSxApiService = {
    getRocket(id: string): Observable<Rocket> {
      return of(new Rocket('1', 'ROCKIT'));
    }
  } as SxApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketPageComponent],
      imports: [CoreModule],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: SxApiService, useValue: fakeSxApiService}
      ]
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
