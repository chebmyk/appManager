import {Injectable} from '@angular/core';
import {Application} from "../../classes/application";
import {Observable, of, throwError} from "rxjs/index";
import {MessageService} from "../message/message.service";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";
import {HttpOptions} from "../utils/HttpOptions";
import {Message, MessageType} from "../../components/commons/message/message";

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private URL = 'api/apps';

  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) {  }


  getApps(): Observable<Application[]> {
    this.messageService.setAction('Getting apps .....');
    return this.http.get<Application[]>(this.URL).pipe(
      catchError(this.handleError('get Apps', []))
    );
  }

  getApp(id: Number): Observable<Application> {
    this.messageService.setAction(`Getting app by id=${id} .....`);
    return this.http.get<Application>(this.URL +`/${id}`).pipe(
      catchError(this.handleError<Application>(`Get App by id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      let message = new Message(MessageType.Error,`${operation} failed: ${error.error.message}`);
      this.messageService.addMessage(message);
      return throwError(new Error(error.error.message));
    };
  }

  update(app: Application): Observable<any> {
    this.messageService.setAction(`Updating app [${app.name}].....`);
    return this.http.put(this.URL, app, HttpOptions).pipe(
      catchError(this.handleError<Application>(`Updating app [${app.name}]`))
    );
  }

  add(app: Application): Observable<any> {
    this.messageService.setAction(`Adding app ${app.name} .....`);
    return this.http.post(this.URL, app, HttpOptions).pipe(
      catchError(this.handleError<Application>(`Adding app [${app.name}]`))
    );
  }


  delete(id: number): Observable<any> {
    return this.http.delete(this.URL + `/${id}`, HttpOptions).pipe(
      catchError(this.handleError<Application>(`Deleting app with id [ ${id} ]`))
    );
  }
}
