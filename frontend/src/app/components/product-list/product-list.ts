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
  // 1. ประกาศตัวแปรไว้ก่อน (ยังไม่ต้องใส่ค่า)
  products$: Observable<Product[]>;

  constructor(private productService: ProductSevice) {
    // 2. กำหนดค่าที่นี่ หลังจากที่ productService ถูก Inject เข้ามาแล้ว
    this.products$ = this.productService.getProducts();
  }
}

