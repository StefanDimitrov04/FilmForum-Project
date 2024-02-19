import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmCardComponent } from './film-card/film-card.component';
import { CreateFilmComponent } from './create-film/create-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';


const routes: Routes = [{
   path: 'home',
   children:[

      {
         path: ':filmId',
         component: FilmCardComponent,   
      
      },
      {
         path: ':filmId/edit',
         component: EditFilmComponent,   
      
      }
   ],
   },
   {
      path: 'add-film',
      component: CreateFilmComponent
   },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class singleFilmRoutingModule { }