import { Component, OnInit, Renderer2 } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/Ifilm';


@Component({
  selector: 'app-films-list-favorites',
  templateUrl: '../shared/film-list.component.html',
  styleUrls: ['../shared/film-list.component.css']
})
export class FilmsListFavoritesComponent implements OnInit {

  constructor(private filmService: FilmService,
              private renderer: Renderer2) { }
  filmList  = [];  
  genreList = [];
  emptyList = [];
  viewOfFilms;

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background', "#dbd5f4"); 
    this.filmService.searchMenu = true;
    this.getFavoritesFilms();
    this.getGenres();
  }

  changeView(view){
    this.viewOfFilms = view;
    this.checkCountsOfFilms(); 
  }

  getFavoritesFilms() {
    this.filmService.getFavoritesItem()
   .subscribe(
      films => {
        console.log(films);
        this.filmList = films;
        this.checkCountsOfFilms(); //For correct grid visible
      }
    )

  }

  getGenres() {
    this.filmService.getGenres().subscribe(
      genre => {
        this.genreList = genre;
        console.log(genre)
      },
      err => { 
        console.log(err); 
      },
      () => { })
  }

  getFilmsByQuery(serchFilm) {
    this.filmService.getFilms(serchFilm).subscribe(
      filmList => {
        this.filmList = filmList;
        console.log(filmList)
      },
      err => { 
        console.log(err); 
      },
      () => { })
  }

  //For correct grid visible
  checkCountsOfFilms(){
    if (this.viewOfFilms==='V'&&this.filmList.length%3 == 2) { 
      this.emptyList.push({});
    }
    else {
      this.emptyList =[];
    }
  }

}
