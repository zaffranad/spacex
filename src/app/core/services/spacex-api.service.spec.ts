import { TestBed } from '@angular/core/testing';

import { SpacexApiService } from './spacex-api.service';

describe('SpacexApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexApiService = TestBed.get(SpacexApiService);
    expect(service).toBeTruthy();
  });
});
