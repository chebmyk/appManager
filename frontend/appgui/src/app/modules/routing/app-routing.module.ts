import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "../../components/users/users.component";
import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {ApplicationsComponent} from "../../components/applications/applications.component";
import {ApplicationDetailsComponent} from "../../components/application-details/application-details.component";
import {LoginComponent} from "../../components/login/login.component";
import {MainMenuComponent} from "../../components/main-menu/main-menu.component";
import {AuthGuard} from "./auth.guard";
import {ChangePasswordComponent} from "../../components/change-password/change-password.component";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: MainMenuComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent},
      { path: 'users/add', component: UserDetailsComponent },
      { path: 'users/:id/applications', component: ApplicationsComponent },
      { path: 'users/:id/password', component: ChangePasswordComponent },
      { path: 'apps', component: ApplicationsComponent },
      { path: 'apps/:id', component: ApplicationDetailsComponent },
      { path: 'apps/add', component: ApplicationDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
