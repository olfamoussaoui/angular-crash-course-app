import { Component } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRequest } from '../services/api/models/ProductRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent {
  productRequest: ProductRequest = {};

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
  ) {}

  saveProduct() {
    this.productService.createProduct(this.productRequest).subscribe(() => {
      this.router.navigate(['products']);
    });
  }
}
