import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSevice } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductSevice) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('รับข้อมูลสำเร็จ', this.products);
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
