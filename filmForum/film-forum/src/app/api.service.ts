import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Film } from './types/Film';
import { UserService } from './user/user-service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http:HttpClient, private userService: UserService) { }

  getFilms() {
    const { appUrl } = environment;
    
    return this.http.get<Film[]>(`${appUrl}/films`);

   }

   getFilm(id: string) {
    const { appUrl } = environment;

     return this.http.get<Film>(`${appUrl}/films/${id}`);
    
   };

   myFilms(ownerId: string) {
    const { appUrl } = environment;
       const url = `${appUrl}/films?where=ownerId=${ownerId}`;

       return this.http.get<Film[]>(url);
   }


  createFilm(filmName: string, filmCategory: string, filmDescription: string, filmImgUrl: string) {
    const user = this.userService.getUser();
   const jsonUser = JSON.stringify(user?._id);   
    const { appUrl } = environment;

    if (!user || !jsonUser) {
      throw new Error('User ID not available.');
    }
  
    const filmData = {
      filmName,
      filmCategory,
      filmDescription,
      filmImgUrl,
      _ownerId: user._id,
    };

    return this.http.post(`${appUrl}/films/create`, filmData).pipe(
      catchError((error) => {
        console.log('Full Error Response:', error); 
        throw error;
      }));
    }

  editFilm(filmId: string, filmName: string, filmCategory: string, filmDescription: string, filmImgUrl: string){
    const { appUrl } = environment;

    const filmData = {
      filmName,
      filmCategory,
      filmDescription,
      filmImgUrl,
    };

    return this.http.put(`${appUrl}/films/${filmId}/edit`, filmData)
  };

  deleteFilm(filmId: string) {

    const { appUrl } = environment;
    return this.http.delete(`${appUrl}/films/${filmId}/delete`);
  }

  likeFilm(filmId: string, userId: string){
    const {appUrl} = environment;

    return this.http.post(`${appUrl}/films/${filmId}/like`, {userId})
  }
}
  
  
