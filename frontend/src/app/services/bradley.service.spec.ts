import { TestBed, inject } from '@angular/core/testing';

import { BradleyService } from './bradley.service';

describe('BradleyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BradleyService]
    });
  });

  it('should be created', inject([BradleyService], (service: BradleyService) => {
    expect(service).toBeTruthy();
  }));
});
