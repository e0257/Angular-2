import { Component, ViewChild, Inject } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Каталог фильмов';

  @ViewChild(FilmListComponent)
  filmListComponent: FilmListComponent;
  links = [
    { path: '/dashboard', icon: 'desktop_windows', label: 'Главная' },
    { path: '/filmList', icon: 'theaters', label: 'Все фильмы' },
    { path: '/profile', icon: 'settings_applications', label: 'Профиль' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  searchFilm(filmName) {
    this.filmListComponent.setFilm(filmName);
  }

  viewOfFilms(view) {
    this.filmListComponent.setView(view);
  }

  contentUp(){
    document.body.scrollTop = 0;
  }
}
