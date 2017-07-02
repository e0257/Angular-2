import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  constructor(private filmService: FilmService) { }
  filmList = [];
  genreList = [];
  

  
  ngOnInit() {
      this.filmService.searchMenu = true;
      this.getPopularFilms();
      this.getGenres();
  }

  getPopularFilms(){
    this.filmService.getPopularFilms().subscribe(
      filmList => {this.filmList = filmList;
      console.log(filmList)},
      err => { console.log(err); },
      () => {  }) 
  }

   getGenres(){
    this.filmService.getGenres().subscribe(
      genre => {this.genreList = genre;
      console.log(genre)},
      err => { console.log(err); },
      () => {  }) 
  }

  getFilmsByQuery(serchFilm){
      this.filmService.getFilms(serchFilm).subscribe(
      filmList => {this.filmList = filmList;
      console.log(filmList)},
      err => { console.log(err); },
      () => {  })
  }

}
