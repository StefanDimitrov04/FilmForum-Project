import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesUpdateService {

  constructor() { }

  private likeCountSource = new BehaviorSubject<number>(0);
  likeCount$ = this.likeCountSource.asObservable();

  updateLikesCount(newCount: number) {
    this.likeCountSource.next(newCount);
  }
}
