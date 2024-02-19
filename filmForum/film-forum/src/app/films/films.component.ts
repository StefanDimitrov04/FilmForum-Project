import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Film } from '../types/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {

  filmList: Film[] = [];

constructor(private apiService: ApiService) {}

  ngOnInit(): void {
     this.apiService.getFilms().subscribe({
      next: (films) => {
        this.filmList = films;
      }
     })
  }
}
