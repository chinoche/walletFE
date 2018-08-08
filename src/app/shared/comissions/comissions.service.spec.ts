import { TestBed, inject } from '@angular/core/testing';

import { ComissionsService } from './comissions.service';

describe('ComissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComissionsService]
    });
  });

  it('should be created', inject([ComissionsService], (service: ComissionsService) => {
    expect(service).toBeTruthy();
  }));
});
