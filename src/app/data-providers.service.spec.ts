import { TestBed } from '@angular/core/testing';

import { DataProvidersService } from './data-providers.service';

describe('DataProvidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProvidersService = TestBed.get(DataProvidersService);
    expect(service).toBeTruthy();
  });
});
