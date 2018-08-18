export class Message {
  type: MessageType;
  description: string;

  constructor(type:MessageType, text:string){
    this.type = type;
    this.description = text;
  }
}

export enum MessageType {
  Success,
  Error,
  Info,
  Warning
}
