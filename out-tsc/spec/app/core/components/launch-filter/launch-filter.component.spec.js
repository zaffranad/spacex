import { async, TestBed } from '@angular/core/testing';
import { LaunchFilterComponent } from './launch-filter.component';
describe('LaunchFilterComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LaunchFilterComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LaunchFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=launch-filter.component.spec.js.map