import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //Import builtin FormsModule
import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {MessageComponent} from './components/commons/message/message.component';
import {ApplicationsComponent} from './components/applications/applications.component';
import {ApplicationDetailsComponent} from "./components/application-details/application-details.component";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import 'hammerjs';
import {MaterialComponentsModule} from "./modules/material/app.materialComponents.module";
import {AppRoutingModule} from "./modules/routing/app-routing.module";
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AddRemoveBlockComponent} from './components/commons/add-remove-block/add-remove-block.component';
import {GridComponent} from './components/commons/grid/grid.component';
import {RemoveDialogComponent} from './components/commons/remove-dialog/remove-dialog.component';
import { FieldValidationComponent } from './components/commons/field-validation/field-validation.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordsComponent } from './components/commons/passwords/passwords.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import {SharedData} from "./services/common/sharedData";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    MessageComponent,
    ApplicationsComponent,
    ApplicationDetailsComponent,
    MainMenuComponent,
    AddRemoveBlockComponent,
    GridComponent,
    RemoveDialogComponent,
    FieldValidationComponent,
    LoginComponent,
    PasswordsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialComponentsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },SharedData],
  bootstrap: [AppComponent]
})
export class AppModule {
}
