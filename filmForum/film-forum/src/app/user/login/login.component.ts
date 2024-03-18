import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { default_domains } from '../../shared/constants';
import { Router } from '@angular/router';
import { UserService } from '../user-service';
import { ErrorService } from '../../shared/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailDomains = default_domains;

  constructor(private router: Router, private userService: UserService, private errorService: ErrorService) {}

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  
    const { email, password } = form.value;
    this.userService.login(email!, password!).subscribe(
      (res: any) => {
        console.log(res);
        
        localStorage.setItem('username', res.username);
        localStorage.setItem('authToken', res.accessToken);
        localStorage.setItem('userId', res._id);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorService.setError(error.error.message);
        console.error('Login error:', error);
      }
    );
  }

}

