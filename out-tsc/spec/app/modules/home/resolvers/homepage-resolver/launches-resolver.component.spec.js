import { async, TestBed } from '@angular/core/testing';
import { HomepageResolver } from './launches-resolver.component';
describe('HomepageResolverComponent', () => {
    let component;
    let fixture;
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
//# sourceMappingURL=launches-resolver.component.spec.js.map