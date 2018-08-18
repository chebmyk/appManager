export class User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export class Securiy {
  user: User;
  password: string;
}

export class Permission {
  action: string;
  target: string;

  constructor(act, trgt){
    this.action = act;
    this.target = trgt;
  }
}
