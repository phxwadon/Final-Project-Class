import { TestBed } from '@angular/core/testing';

import { ProductSevice } from './product';

describe('Product', () => {
  let service: ProductSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
