import { Component } from '@angular/core';
import { UserService } from '../../user/user-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) {

  }

  get isLoggedIn():  boolean {
    //  return this.userService.isLogged;
    const userIsLogged = this.userService.getUser();
    if(userIsLogged) {
      return true;
    } else {
      return false;
    };
  };

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        localStorage.clear();
        this.router.navigate(['/login']);
      },
      error: () => {
       this.router.navigate(['/login']);
      }
    },
     )
  }
}
