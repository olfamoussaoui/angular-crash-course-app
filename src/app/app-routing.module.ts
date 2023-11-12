import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailsComponent } from './form-details/form-details.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  { path: 'home', component: FormDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
