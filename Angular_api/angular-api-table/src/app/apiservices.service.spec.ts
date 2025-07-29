import { TestBed } from '@angular/core/testing';
import { ApiServicesService } from './apiservices.service';

describe('DataService', () => {
  let service: ApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
