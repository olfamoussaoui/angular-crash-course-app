import { Component } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
})
export class FormDetailsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted = false;
  messages: Array<any> = [];

  onSubmit() {
    this.isSubmitted = true;
    let formContent = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
    this.messages.push(formContent);
  }
}
