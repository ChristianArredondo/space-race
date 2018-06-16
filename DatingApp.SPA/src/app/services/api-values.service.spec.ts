import { TestBed, inject } from '@angular/core/testing';

import { ApiValuesService } from './api-values.service';

describe('ApiValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiValuesService]
    });
  });

  it('should be created', inject([ApiValuesService], (service: ApiValuesService) => {
    expect(service).toBeTruthy();
  }));
});
