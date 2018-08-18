import {Injectable} from '@angular/core';
import {Securiy, User} from "../../classes/user";
import {Observable, throwError} from "rxjs/index";
import {MessageService} from "../message/message.service";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";
import {HttpOptions} from "../utils/HttpOptions";
import {Message, MessageType} from "../../components/commons/message/message";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'api/users';

  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) { }

  getUsers(): Observable<any> {
    this.messageService.setAction('Getting users .....');
    return this.http.get<User[]>(this.URL).pipe(
      catchError(this.handleError('get Users', []))
    );
  }

  getUser(id: Number) : Observable<User> {
    this.messageService.setAction(`Getting user by id=${id} .....`);
    return this.http.get<User>(this.URL + `/${id}`).pipe(
      catchError(this.handleError<User>('Get Users'))
    );
  }

  update(user: User): Observable<any> {
    this.messageService.setAction(`Updating user ${user.name} .....`);
    return this.http.put(this.URL, user, HttpOptions).pipe(
      catchError(this.handleError<User>(`Updating user  ${user.name}`))
    );
  }

  add(credential: Securiy): Observable<any> {
    this.messageService.setAction(`Adding user ${credential.user.email} .....`);
    return this.http.post(this.URL, credential, HttpOptions).pipe(
      catchError(this.handleError<User>(`Adding user  ${credential.user.email}`))
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.URL + `/${id}`, HttpOptions).pipe(
      catchError(this.handleError<User>(`Deleting users with id [ ${id} ]`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      let message = new Message (MessageType.Error, `${operation} failed : ${error.error.message}`);
      this.messageService.addMessage(message);
      return throwError(new Error(error.error.message));
    };
  }

  resetPassword(security: Securiy): Observable<any> {
    this.messageService.setAction(`Reset password for user ${security.user.email} .....`);
    return this.http.put(this.URL + `/${security.user.id}/password`, security, HttpOptions).pipe(
      catchError(this.handleError<Securiy>(`Reset password for user ${security.user.email}`))
    );
  }

  checkPassword(currentCredentials: Securiy): Observable<any>  {
    this.messageService.setAction('Checking credentials for user .....');
    return this.http.put<Securiy>(this.URL + `/${currentCredentials.user.id}/password/check`, currentCredentials, HttpOptions).pipe(
      catchError(this.handleError<Securiy>('Checking credentials'))
    );
  }

}
