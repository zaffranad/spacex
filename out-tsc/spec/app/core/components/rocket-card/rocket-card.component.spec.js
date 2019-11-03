import { async, TestBed } from '@angular/core/testing';
import { RocketCardComponent } from './rocket-card.component';
describe('RocketCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RocketCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RocketCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rocket-card.component.spec.js.map