import { TestBed } from '@angular/core/testing';

import { SxApiService } from './sx-api.service';

describe('SxApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SxApiService = TestBed.get(SxApiService);
    expect(service).toBeTruthy();
  });
});
