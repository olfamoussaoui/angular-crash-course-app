import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRequest } from '../services/api/models/ProductRequest';
import { Product } from '../services/api/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProductsWithLimit().subscribe((data) => {
      this.productList = data;
    });
  }
}
