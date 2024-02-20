import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrl: './create-film.component.css'
})
export class CreateFilmComponent {

  constructor(private apiService: ApiService, private router: Router){

  }

  newFilm(form: NgForm): void{
    console.log('form submitted');
    
      if(form.invalid){
        return;
      }

      console.log("postingFilm...");

      const { filmName, filmCategory, filmDescription, filmImgUrl} = form.value;
      console.log(form.value);
      

   this.apiService.createFilm(filmName, filmCategory, filmDescription, filmImgUrl).subscribe(() => {
    console.log('Creating film...'); 
     this.router.navigate(['/home']);
   })
  }
}
