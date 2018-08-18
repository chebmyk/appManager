import { Injectable } from '@angular/core';
import {Message, MessageType} from "../../components/commons/message/message";
import {NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          this.clear();
      }
    });
  }

  messages: Message[] = [];
  action: string;

  addMessage(message: Message) {
    this.messages.push(message);
  }

  error(text:string){
    this.addMessage(new Message(MessageType.Error, text));
  }

  info(text:string){
    this.addMessage(new Message(MessageType.Info, text));
  }

  success(text:string){
    this.addMessage(new Message(MessageType.Success, text));
  }

  warning(text:string){
    this.addMessage(new Message(MessageType.Warning, text));
  }

  remove(message: Message){
    const index = this.messages.indexOf(message);
    if (index >= 0) {
      this.messages.splice(index, 1);
    }
  }

  setAction(action: string) {
    this.action = action;
  }

  clear() {
    this.messages = [];
  }
}
