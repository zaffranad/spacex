import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketResolver } from './rocket-resolver.component';

describe('RocketResolverComponent', () => {
  let component: RocketResolver;
  let fixture: ComponentFixture<RocketResolver>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketResolver]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketResolver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
