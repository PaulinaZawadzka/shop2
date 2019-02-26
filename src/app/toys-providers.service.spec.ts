import { TestBed } from '@angular/core/testing';

import { ToysProvidersService } from './toys-providers.service';

describe('ToysProvidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToysProvidersService = TestBed.get(ToysProvidersService);
    expect(service).toBeTruthy();
  });
});
