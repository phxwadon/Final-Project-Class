import { Component } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { ProductSevice } from '../../services/product';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  newProduct = { name: '', price: 0, description: '' };
  selectFile: File | null = null;

  onFileSelect(event: any) {
    this.selectFile = event.target.files[0];
  }

  constructor(private productService: ProductSevice, private router: Router) {}

  saveData() {

    console.log('1. เริ่มฟังก์ชัน saveData');
    console.log('ข้อมูลที่จะส่ง:', this.newProduct);
    console.log('ไฟล์ที่เลือก:', this.selectFile);
    const formData = new FormData();

    formData.append('name', this.newProduct.name);
    formData.append('price', this.newProduct.price.toString());
    formData.append('description', this.newProduct.name);

    if (this.selectFile) {
      formData.append('image', this.selectFile, this.selectFile.name)
    }

    this.productService.addProduct(formData).subscribe({
      next: (res) => {
        alert('เพิ่มสินค้าสำเร็จ');
        this.router.navigate(['/']);
      },
      error: (err) => console.error(err)
    })

  }
}