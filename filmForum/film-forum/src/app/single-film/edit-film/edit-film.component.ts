import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Film } from '../../types/Film';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrl: './edit-film.component.css'
})
export class EditFilmComponent implements OnInit {

  film: Film | any;

  constructor(private apiService: ApiService, private activatedRoute :ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.editFilm();
  };

editFilm() {
  const filmId = this.activatedRoute.snapshot.params['filmId'];
  
    return this.apiService.getFilm(filmId).subscribe(film => {
      this.film = film;
   });
};

newDataFilm(form: NgForm): void {
  const filmId = this.activatedRoute.snapshot.params['filmId'];
  const { filmName, filmCategory, filmDescription, filmImgUrl} = form.value;

  this.apiService.editFilm(filmId, filmName, filmCategory, filmDescription, filmImgUrl).subscribe(() => {
    this.router.navigate([`/home/${filmId}`]);
  });
}
}
