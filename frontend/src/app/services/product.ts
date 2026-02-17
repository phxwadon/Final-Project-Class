import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductSevice {
  private readonly apiUrl = 'https://final-project-class.onrender.com/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(formData: FormData): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, formData);
  }
}