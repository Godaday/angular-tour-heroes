import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() {
  }

  // 添加消息
  add(message: string) {
    this.messages.push(message)
  }

  // 清除消息
  clear() {
    this.messages = []
  }
}
