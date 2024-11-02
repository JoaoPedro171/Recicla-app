import { TestBed } from '@angular/core/testing';

import { AvisosServiceService } from './avisos-service.service';

describe('AvisosServiceService', () => {
  let service: AvisosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
