import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailsComponent } from './form-details/form-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: FormDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:username', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
