import { TestBed, inject } from '@angular/core/testing';

import { RegistrService } from './registr.service';

describe('RegistrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrService]
    });
  });

  it('should be created', inject([RegistrService], (service: RegistrService) => {
    expect(service).toBeTruthy();
  }));
});
