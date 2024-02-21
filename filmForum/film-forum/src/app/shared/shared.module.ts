import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [
    EmailDirective,
    SlicePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective,
    SlicePipe
  ]
})
export class SharedModule { }
