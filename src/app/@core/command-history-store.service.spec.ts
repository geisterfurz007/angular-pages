import { TestBed } from '@angular/core/testing';

import { CommandHistoryStoreService } from './command-history-store.service';

describe('CommandHistoryStoreService', () => {
  let service: CommandHistoryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandHistoryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
