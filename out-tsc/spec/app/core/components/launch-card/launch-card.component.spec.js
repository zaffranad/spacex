import { async, TestBed } from '@angular/core/testing';
import { LaunchCardComponent } from './launch-card.component';
describe('LaunchCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LaunchCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LaunchCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=launch-card.component.spec.js.map