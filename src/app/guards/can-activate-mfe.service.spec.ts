import { TestBed } from '@angular/core/testing';

import { CanActivateMfeService } from './can-activate-mfe.service';

describe('CanActivateMfeService', () => {
  let service: CanActivateMfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateMfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
