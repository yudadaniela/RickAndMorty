import { TestBed } from '@angular/core/testing';

import { ApiRickyService } from './api-ricky.service';

describe('ApiRickyService', () => {
  let service: ApiRickyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
