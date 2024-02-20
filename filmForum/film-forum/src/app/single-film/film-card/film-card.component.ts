import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../types/Film';




@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css',
  host: {ngSkipHydration: 'true'},
})
export class FilmCardComponent implements OnInit {

   film: Film | any ;

constructor(private apiService: ApiService, private activatedRoute :ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchFilm();
  }

  fetchFilm(): void{
      const id = this.activatedRoute.snapshot.params['filmId'];

      this.apiService.getFilm(id).subscribe((film) => {
        this.film = film;
                
      }, 
      (error) => {
        console.log(error.message);
      })
  }
}
