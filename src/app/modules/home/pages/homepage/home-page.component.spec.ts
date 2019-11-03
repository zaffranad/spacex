import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { CoreModule } from '../../../../core/core.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SxLaunchRequester } from '../../../../core/services/sx-launch-requester';

describe('HomepageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: {data: {launchRequester: new SxLaunchRequester(null)}}
    };
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [CoreModule, RouterModule],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
