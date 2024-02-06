import { TestBed } from '@angular/core/testing';

import { RemoteMfeService } from './remote-mfe.service';

describe('RemoteMfeService', () => {
  let service: RemoteMfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteMfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
