import { TestBed } from '@angular/core/testing';
import { SpacexApiService } from './spacex-api.service';
describe('SpacexApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(SpacexApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=spacex-api.service.spec.js.map