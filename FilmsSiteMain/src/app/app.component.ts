import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmService } from './services/film.service';
import { ExtraService } from './services/extra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentInit {
  viewOfFilms: string = "V";
  searchValue: string;

  @ViewChild(FilmListComponent)
  filmListComponent: FilmListComponent;

  constructor(private filmService: FilmService,
              private extraService: ExtraService) { }

ngAfterContentInit() {
    console.log(this.filmListComponent);
  }

ngOnInit(){
  this.setView();
}

setView(){
  this.filmService.viewOfFilms = this.viewOfFilms;
}



searchFilm() {
  console.log(this.filmListComponent);
    setTimeout(this.filmListComponent.getFilmsByQuery(this.searchValue),5000);
}
  links = [
    { path: '', icon: 'glyphicon glyphicon-home', label: 'Главная' },
    { path: '/filmList', icon: 'glyphicon glyphicon-film', label: 'Все фильмы' },
    { path: '/favorites', icon: 'glyphicon glyphicon-user', label: 'Популярные' }
  ];
}
