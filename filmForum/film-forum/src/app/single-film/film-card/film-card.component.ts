import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../../types/Film';
import { UserService } from '../../user/user-service';




@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css',
  host: {ngSkipHydration: 'true'},
})
export class FilmCardComponent implements OnInit {

   film: Film | any ;
   isOwner: boolean = false;

constructor(private apiService: ApiService, private activatedRoute :ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.fetchFilm();
  }

  fetchFilm(): void{
          const id = this.activatedRoute.snapshot.params['filmId'];
          const userId = this.userService.getUser()?._id;

      this.apiService.getFilm(id).subscribe((film) => {
        this.film = film;
        if(this.film._ownerId == userId){
          this.isOwner = true
        };
      }, 
      (error) => {
        console.log(error.message);
      })
  };

  deleteCurrFilm() {
    const id = this.activatedRoute.snapshot.params['filmId'];

    this.apiService.deleteFilm(id).subscribe(() => {
      console.log('film delete successfully');
      this.router.navigate(['/home']);  
    });
  };

  likeFilm() {
    const id = this.activatedRoute.snapshot.params['filmId'];
    const userId = this.userService.getUser()?._id;
     if(userId){
      this.apiService.likeFilm(id, userId).subscribe(
        (response) => {
          console.log('Film liked successfully', response);
        },
        (error) => {
          console.error('Error liking film', error);
        }
      );;
      
     };
    
  }
}
