import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsRubanComponent } from './pics-ruban.component';

describe('PicsRubanComponent', () => {
  let component: PicsRubanComponent;
  let fixture: ComponentFixture<PicsRubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsRubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsRubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
