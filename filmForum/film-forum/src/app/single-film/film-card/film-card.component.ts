import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment, Film } from '../../types/Film';
import { UserService } from '../../user/user-service';
import { LikesUpdateService } from '../likes-update.service';
import { NgForm } from '@angular/forms';
import { CommentsService } from '../comments.service';;




@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css',
  host: {ngSkipHydration: 'true'},
})
export class FilmCardComponent implements OnInit {

   film: Film | any ;
   likesCount: number = 0;
   isOwner: boolean = false;
   comments: Comment[] = [];
   isLogged: boolean = false;


constructor(private apiService: ApiService, private activatedRoute :ActivatedRoute, private router: Router, 
  private userService: UserService, private updateLikesService: LikesUpdateService, private commentsService: CommentsService) {}


  ngOnInit(): void {
    this.fetchFilm();
    
  }

  fetchFilm(): void{
          const id = this.activatedRoute.snapshot.params['filmId'];
          const userId = this.userService.getUser()?._id;
          if(userId){
       this.isLogged = true;
          }
      
      this.apiService.getFilm(id).subscribe((film) => {
        this.film = film;
        this.comments = film.comments;
        this.likesCount = film.likes.length;
  
        if(this.film._ownerId == userId){
          this.isOwner = true;
        };
      }, 
      (error) => {
        console.log(error.error.message);
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
        (response: any) => {
          this.likesCount = response.film.likes.length;
          this.updateLikesService.updateLikesCount(this.likesCount);
          console.log('Film liked successfully', response);
        },
        (error) => {
          console.error('Error liking film', error);
        }
      );;
      
     }
   };

   dislikeFilm() {
    const id = this.activatedRoute.snapshot.params['filmId'];
    const userId = this.userService.getUser()?._id;
    if(userId){
      this.apiService.dislikeFilm(id, userId).subscribe((response: any) => {
        this.likesCount = response.film.likes.length;
        this.updateLikesService.updateLikesCount(this.likesCount);
        console.log('disliked', response);
      },
      (error) => {
        console.log('error', error);
      });
    }
   };

   commentOnFilm(form: NgForm) {
    const id = this.activatedRoute.snapshot.params['filmId'];
    const userId = this.userService.getUser()?._id;
    const username = this.userService.getUser()?.username;

    const commentText = form.value.comment;
    
    if(userId && username) {
      this.apiService.commentOnFilm(id, userId, commentText, username).subscribe((response: any) => {
        // this.userUsername = username;
        this.comments = response.film.comments;
        this.commentsService.updateComments(this.comments);
        form.resetForm();
        console.log('commented on film');
     })
    } 
   }
}
