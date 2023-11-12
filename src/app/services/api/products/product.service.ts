import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { ProductRequest } from '../models/ProductRequest';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private readonly http: HttpClient) {}

  getAllProductsWithLimit(limit = 5) {
    const productUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Product[]>(productUrl);
  }
  createProduct(product: ProductRequest) {
    const productUrl = `${this.baseUrl}products`;
    return this.http.post<Product>(productUrl, product);
  }
}
