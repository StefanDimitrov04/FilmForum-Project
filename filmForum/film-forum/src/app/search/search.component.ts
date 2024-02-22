import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user-service';
import { Film } from '../types/Film';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  films: Film[] = [];
  IdOfOwner: string = '';
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService) {}

   ngOnInit(): void {
     this.myFilms(this.IdOfOwner);
   }

   myFilms(ownerId: string) {
    const userId = this.userService.getUser();

    if(userId?._id){
      ownerId = userId._id;
      this.IdOfOwner = ownerId;
       this.apiService.myFilms(ownerId).subscribe((films) => {
        this.films = films;
      })
    }
   }
}
