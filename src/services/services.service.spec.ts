import { TestBed } from '@angular/core/testing';

import {ProductService} from 'src/services/services.service'; 

describe('servicesService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
