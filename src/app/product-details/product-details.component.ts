import { Component, Input } from '@angular/core';
import { Product } from '../services/api/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input()
  productRepresentation: Product = {};
}
