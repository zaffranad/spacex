import { TestBed } from '@angular/core/testing';

import { SxApiService } from './sx-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('SxApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SxApiService = TestBed.get(SxApiService);
    expect(service).toBeTruthy();
  });
});
