import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ProductSevice } from '../../services/product';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products$: Observable<Product[]>;

  constructor(private productService: ProductSevice) {
    this.products$ = this.productService.getProducts();
  }
}