import { TestBed, inject } from '@angular/core/testing';

import { ApiAuthService } from './api-auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAuthService]
    });
  });

  it('should be created', inject([ApiAuthService], (service: ApiAuthService) => {
    expect(service).toBeTruthy();
  }));
});
