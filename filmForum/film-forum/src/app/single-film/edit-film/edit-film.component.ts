import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Film } from '../../types/Film';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrl: './edit-film.component.css'
})
export class EditFilmComponent {
  activatedRoute: any;

  film: Film = {
    _id: '',
    filmName: '',
    filmCategory: '',
    filmDescription: '',
    filmImgUrl: ''
  };

  constructor(private apiService: ApiService){}

editFilm(form: NgForm) {
  const filmId = this.activatedRoute.snapshot.params['filmId'];
  
    return this.apiService.getFilm(filmId).subscribe(film => {
      this.film = film;
    })
}
}
