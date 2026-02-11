import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSevice } from '../../services/product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  newProduct = { name: '', price: 0 };

  constructor(private productService: ProductSevice, private router: Router) {}

  saveData() {
    // เช็คความชัวร์อีกรอบก่อนส่ง
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct(this.newProduct).subscribe({
        next: (res) => {
          alert('บันทึกสำเร็จ!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error(err)
      });
    }
  }
}