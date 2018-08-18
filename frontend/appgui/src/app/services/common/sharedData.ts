import { Injectable } from '@angular/core';
import {User} from "../../classes/user";

@Injectable()
export class SharedData {

  public updatedUser: User;

  public constructor() { }

}
