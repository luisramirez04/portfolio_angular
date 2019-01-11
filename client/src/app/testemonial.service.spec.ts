import { TestBed } from '@angular/core/testing';

import { TestemonialService } from './testemonial.service';

describe('TestemonialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestemonialService = TestBed.get(TestemonialService);
    expect(service).toBeTruthy();
  });
});
