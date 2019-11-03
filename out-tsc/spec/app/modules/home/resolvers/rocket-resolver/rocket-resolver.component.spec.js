import { async, TestBed } from '@angular/core/testing';
import { RocketResolver } from './rocket-resolver.component';
describe('RocketResolverComponent', () => {
    let component;
    let fixture;
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
//# sourceMappingURL=rocket-resolver.component.spec.js.map