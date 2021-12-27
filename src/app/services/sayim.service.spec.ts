/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SayimService } from './sayim.service';

describe('Service: Sayim', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SayimService]
    });
  });

  it('should ...', inject([SayimService], (service: SayimService) => {
    expect(service).toBeTruthy();
  }));
});
