import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})

// const user: User

export class UserService{
  
   user: User | undefined;
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
   
  user$ = this.user$$.asObservable();

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;
  
  constructor(private http: HttpClient) { 
   this.subscription = this.user$.subscribe((user) => {
    this.user = user;
   })
  }


  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', { email, password }).pipe(tap((user) => {
      this.user$$.next(user);
    }))
}
  
  register(username: string, email: string, password: string, repeatPassword: string){
    return this.http.post<User>(`/api/users/register`, {username, email, password, repeatPassword}).pipe(tap((user) => {
      this.user$$.next(user);
    }));
  }

  logout() {
    return this.http.get<User>(`/api/users/logout`, {}).pipe(tap(() => {
      this.user$$.next(undefined);
    }))
  };

  getUser() {
    const userId = localStorage.getItem('userId');
    const userToken = localStorage.getItem('authToken');
    
    if (userToken && userId) {

      return { userToken, _id: userId };
    }

    return null; // Return null if user information is not found
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
