import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../types/Film';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

 private commentsSource = new BehaviorSubject<Comment[]>([]);
 comments$ = this.commentsSource.asObservable();

 updateComments(comments: Comment[]){
    this.commentsSource.next(comments);
 }
}
