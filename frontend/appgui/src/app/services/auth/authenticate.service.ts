import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {tap} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";
import {Permission, User} from "../../classes/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  currentUser : User;
  accessMatrix : Permission[];

  constructor(private http: HttpClient,
              public messageService: MessageService
  ) {}

  authenticate(credentials, successCallback): Observable<any> {
    this.messageService.setAction('Authenticating user .....');
    let headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
    } : {});
    return this.http.get('api/auth', {headers: headers}).pipe(
      tap(res => {
        if (res['authenticated'] == true) {
          this.currentUser = res['principal'].userDetails;
          this.accessMatrix = res['principal'].accessMatrix;
          successCallback();
        } else{
          this.currentUser = new User();
        }
      })
    );
  }

  logout() {
    this.messageService.setAction('Logout user .....');
    return this.http.post('/logout', {}).pipe(tap(res => {
      this.currentUser = new User();
    },
      error =>{console.log(error)}
      )
    );
  }

  hasAccess(action: string, target: string): boolean{
    let permission = new Permission(action, target);
    return this.accessMatrix.some(p => p.target === permission.target && p.action === permission.action);
  }
}
