import { TestBed } from '@angular/core/testing';

import { TypeReleveService } from './type-releve.service';

describe('TypeReleveService', () => {
  let service: TypeReleveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeReleveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
