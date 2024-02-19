import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFilmComponent } from './create-film/create-film.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { singleFilmRoutingModule } from './film-routing.module';
import { FormsModule } from '@angular/forms';
import { EditFilmComponent } from './edit-film/edit-film.component';




@NgModule({
  declarations: [
    CreateFilmComponent,
    FilmCardComponent,
    EditFilmComponent
  ],
  imports: [
    CommonModule,
    singleFilmRoutingModule,
    FormsModule
  ],

})
export class SingleFilmModule { }
