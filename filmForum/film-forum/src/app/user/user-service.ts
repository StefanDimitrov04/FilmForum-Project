import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})

export class UserService{
  
   user: User | undefined;
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
   
  user$ = this.user$$.asObservable();
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();

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
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
    const userToken = localStorage.getItem('authToken');
    if (userToken && userId) {

      return { userToken, _id: userId, username };
    }
  }

    return null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
