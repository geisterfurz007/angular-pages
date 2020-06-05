import { TestBed } from '@angular/core/testing';

import { CurrentLinesStoresService } from './current-lines-stores.service';

describe('CurrentLinesStoresServiceService', () => {
  let service: CurrentLinesStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentLinesStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
