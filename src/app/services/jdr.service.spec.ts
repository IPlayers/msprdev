import { TestBed } from '@angular/core/testing';

import { JdrService } from './jdr.service';

describe('JdrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JdrService = TestBed.get(JdrService);
    expect(service).toBeTruthy();
  });
});
