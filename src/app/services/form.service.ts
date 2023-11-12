import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Olfa',
      email: 'moussaoui@mail.com',
      message: 'Hello world',
    });
    this.insert({
      name: 'Ilyes',
      email: 'ilyes@mail.com',
      message: 'Hello world - Ilyes',
    });
    this.insert({
      name: 'Dou',
      email: 'dou@mail.com',
      message: 'Hello world - Dou',
    });
  }
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
