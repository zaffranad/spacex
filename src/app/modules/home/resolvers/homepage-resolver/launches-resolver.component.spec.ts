import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageResolver } from './launches-resolver.component';


describe('HomepageResolverComponent', () => {
  let component: HomepageResolver;
  let fixture: ComponentFixture<HomepageResolver>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageResolver]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageResolver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
