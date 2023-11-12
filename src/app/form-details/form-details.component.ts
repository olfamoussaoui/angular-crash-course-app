import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormDetailsService } from '../services/form-details.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
})
export class FormDetailsComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted = false;
  messages: Array<any> = [];

  // private service: FormDetailsService = Inject(FormDetailsService);

  constructor(private readonly formDetailsService: FormDetailsService) {}

  ngOnInit(): void {
    this.messages = this.formDetailsService.getAllMessages();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.formDetailsService.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  deleteMessage(index: number) {
    this.formDetailsService.deleteMessage(index);
  }
}
