import { TestBed } from '@angular/core/testing';

import { FwCommonService } from './fw-common.service';

describe('FwCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FwCommonService = TestBed.get(FwCommonService);
    expect(service).toBeTruthy();
  });
});
