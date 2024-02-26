import { TestBed } from '@angular/core/testing';

import { LikesUpdateService } from './likes-update.service';

describe('LikesUpdateService', () => {
  let service: LikesUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
