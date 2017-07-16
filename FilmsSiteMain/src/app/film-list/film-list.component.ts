import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'film-list',
  templateUrl: '../shared/film-list.component.html',
  styleUrls: ['../shared/film-list.component.css']
})
export class FilmListComponent implements OnInit {

  constructor(private filmService: FilmService) { }
  filmList = [];
  genreList = [];
  

  
  ngOnInit() {
      document.body.style.background = "#dbd5f4";
      this.filmService.searchMenu = true;
      this.getPopularFilms();
      this.getGenres();
  }

  getPopularFilms(){
    this.filmService.getPopularFilms().subscribe(
      filmList => {this.filmList = filmList;
      console.log(filmList);
      this.checkCountsOfFilms(); //For correct grid visible
    },
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

  getFilmsByQuery(searchFilm){
      this.filmService.getFilms(searchFilm).subscribe(
      filmList => {this.filmList = filmList;
      console.log(filmList)},
      err => { console.log(err); },
      () => {  })
  }
 //For correct grid visible
  checkCountsOfFilms(){
    if (this.filmList.length%3 == 2) { 
      console.log(this.filmList);
      this.filmList.push({});
      console.log(this.filmList);
    }
  }

}
