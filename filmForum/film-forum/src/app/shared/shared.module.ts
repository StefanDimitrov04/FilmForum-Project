import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ErrorsComponent } from './errors/errors.component';



@NgModule({
  declarations: [
    EmailDirective,
    SlicePipe,
    ErrorsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective,
    SlicePipe,
    ErrorsComponent
  ]
})
export class SharedModule { }
