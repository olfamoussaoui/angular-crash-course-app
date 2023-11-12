import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormDetailsComponent } from './form-details/form-details.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { FormDetailsService } from './services/form-details.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, FormDetailsComponent, MessageDetailsComponent, MenuComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [FormDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
