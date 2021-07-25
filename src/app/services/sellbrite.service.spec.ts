import { TestBed } from '@angular/core/testing';

import { SellbriteService } from './sellbrite.service';

describe('SellbriteService', () => {
  let service: SellbriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellbriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
