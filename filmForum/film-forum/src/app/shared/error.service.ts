import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorMessageSubject = new BehaviorSubject<string>('');
  errorMessage$: Observable<string> = this.errorMessageSubject.asObservable();

  constructor() { }

  setError(message: string): void {
    this.errorMessageSubject.next(message);
    // Automatically clear the error message after 3 seconds
    timer(3000).subscribe(() => {
      this.clearError();
    });
  }

  clearError(): void {
    this.errorMessageSubject.next('');
  }
}
