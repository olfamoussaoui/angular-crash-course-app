import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  messages: Array<any> = [];

  constructor() {}

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
