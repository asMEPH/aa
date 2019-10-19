import { TestBed } from '@angular/core/testing';

import { BrewStoreService } from './brew-store.service';

describe('BrewStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrewStoreService = TestBed.get(BrewStoreService);
    expect(service).toBeTruthy();
  });
});
