import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routes, RouterModule} from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { FilmService } from './services/film.service';
import { FilmsListFavoritesComponent } from './films-list-favorites/films-list-favorites.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",
    component: FilmListComponent
  },
  {
    path:"filmList",
    component: FilmListComponent
  },
  {
    path:"favorites",
    component: FilmsListFavoritesComponent
  },
  {
    path:"film/:id",
    component: FilmInfoComponent
  },
  {
    path:"**",
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    FilmInfoComponent,
    FilmsListFavoritesComponent,
    SearchComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
