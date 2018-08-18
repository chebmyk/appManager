import {User} from "./user";

export class Application {
  id: number;
  name: string;
  type: string;
  contentTypes: string[];
  user: User;
}
