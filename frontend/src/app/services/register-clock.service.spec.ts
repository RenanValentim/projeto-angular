import { TestBed } from '@angular/core/testing';

import { RegisterClockService } from './register-clock.service';

describe('RegisterClockService', () => {
  let service: RegisterClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
