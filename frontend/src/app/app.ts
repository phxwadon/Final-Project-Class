import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>รายการสินค้าจากหลังบ้าน</h1>
    <ul>
    @for (p of products; track $index) {
      <li>
        {{ p.name }} - {{ p.price }} บาท
      </li>
    }
    </ul>`,
  styleUrl: './app.css'
})
export class App implements OnInit{
products: any[] = [];

  constructor(
    private productService: Product,
    private cdr: ChangeDetectorRef // 2. Inject เข้ามาใน Constructor
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      console.log('Log ขึ้นแล้ว:', data);
      this.products = data; // 3. เก็บข้อมูล
      this.cdr.detectChanges(); // 4. สั่งให้ Angular "วาดหน้าจอใหม่เดี๋ยวนี้!"
    });
  }
}