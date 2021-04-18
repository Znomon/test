import { TestBed } from '@angular/core/testing';

import { ScCryptoService } from './sc-crypto.service';

describe('ScCryptoService', () => {
  let service: ScCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
