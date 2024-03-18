import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent implements OnInit {
  errorMessage = '';
  showError = false;
  
  constructor(private errorService: ErrorService){}

ngOnInit(): void {
   
  this.errorService.errorMessage$.subscribe(message => {
    this.errorMessage = message;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 3000);
  })

}

}
