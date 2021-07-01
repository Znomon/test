import { TestBed } from '@angular/core/testing';

import { MNFTHService } from './mnfth.service';

describe('MNFTHService', () => {
  let service: MNFTHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MNFTHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
