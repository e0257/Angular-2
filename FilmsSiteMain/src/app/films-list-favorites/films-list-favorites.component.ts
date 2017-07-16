import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films-list-favorites',
  templateUrl: '../shared/film-list.component.html',
  styleUrls: ['../shared/film-list.component.css']
})
export class FilmsListFavoritesComponent implements OnInit {

  constructor(private filmService: FilmService) { }
  filmList = [];
  genreList = [];

  ngOnInit() {
    document.body.style.background = "#dbd5f4";
    this.filmService.searchMenu = true;
    this.getFavoritesFilms();
    this.getGenres();
  }

  getFavoritesFilms() {
    this.filmService.getFavoritesItem().subscribe(
      favorites => {
        
          favorites.forEach(filmItem => {
          if(filmItem.status) {
          this.filmService.getFilmById(filmItem.filmId).subscribe(
            film => {
              this.filmList.push(film);
              console.log(film);
            },
            err => { console.log(err); }
            )}
        });
        console.log(favorites)
      },
      err => { console.log(err); },
      () => {        })
  }

  getGenres() {
    this.filmService.getGenres().subscribe(
      genre => {
      this.genreList = genre;
        console.log(genre)
      },
      err => { console.log(err); },
      () => { })
  }

  getFilmsByQuery(serchFilm) {
    this.filmService.getFilms(serchFilm).subscribe(
      filmList => {
      this.filmList = filmList;
        console.log(filmList)
      },
      err => { console.log(err); },
      () => { })
  }

}
