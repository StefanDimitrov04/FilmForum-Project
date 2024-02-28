import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { userRoutingModule } from './user/user-routing.module';
import { SingleFilmModule } from './single-film/single-film.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { AppInterceptorProvider } from './app.interceptor';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    userRoutingModule,
    SingleFilmModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AppInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
