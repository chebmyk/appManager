import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../../services/message/message.service";
import {Message, MessageType} from "./message";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  cssClass(message: Message) {
    if (!message) {
      return;
    }
    switch (message.type) {
      case MessageType.Success:
        return 'alert alert-success';
      case MessageType.Error:
        return 'alert alert-danger';
      case MessageType.Info:
        return 'alert alert-info';
      case MessageType.Warning:
        return 'alert alert-warning';
    }
  }

}
