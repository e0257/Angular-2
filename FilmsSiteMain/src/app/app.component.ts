import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  dropdownMenu = false;

  constructor(private filmService: FilmService) { }

  links = [
    { path: '', icon: 'glyphicon glyphicon-home', label: 'Главная' },
    { path: '/filmList', icon: 'glyphicon glyphicon-film', label: 'Все фильмы' },
    { path: '/favorites', icon: 'glyphicon glyphicon-user', label: 'Избранные' }
  ];

  showMenu(){
    this.dropdownMenu = !this.dropdownMenu;
  }
}
