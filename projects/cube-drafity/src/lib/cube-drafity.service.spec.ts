import { TestBed } from '@angular/core/testing';

import { CubeDrafityService } from './cube-drafity.service';

describe('CubeDrafityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CubeDrafityService = TestBed.get(CubeDrafityService);
    expect(service).toBeTruthy();
  });
});
