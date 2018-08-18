import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticateService} from "../../services/auth/authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  title = 'Application Manager';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthenticateService,
              private router: Router) {
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        this.router.navigateByUrl('/login');
      }, error => {
        console.log('logout error:' + error);
        this.router.navigateByUrl('/login')
      }
    );
  }

  goToDetails() {
    if(this.authService.currentUser){
      let userId = this.authService.currentUser.id;
      this.router.navigateByUrl('/users/'+userId);
    }
  }

}
