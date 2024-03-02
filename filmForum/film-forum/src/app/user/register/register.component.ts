import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { default_domains } from '../../shared/constants';
import { UserService } from '../user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  emailDomains = default_domains;

  constructor(private router: Router, private userService: UserService) {}

  register(form: NgForm): void{

    const { username, email, password, repeatPassword} =form.value;
   
  this.userService.register( username!, email!, password!, repeatPassword!).subscribe((res: any) => {
   localStorage.setItem('username', res.username);
   localStorage.setItem('authToken', res.accessToken);
    localStorage.setItem('userId', res._id);
    this.router.navigate(['/home']);
  })

  
  }

}
