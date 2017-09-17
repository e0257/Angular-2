import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/Ifilm';


@Component({
  selector: 'film-list',
  templateUrl: '../shared/film-list.component.html',
  styleUrls: ['../shared/film-list.component.css']
})
export class FilmListComponent implements OnInit {

  constructor(private filmService: FilmService,
              private renderer: Renderer2) { }
  filmList : Film[] = [];
  genreList = [];
  emptyList =[];
  viewOfFilms ='V';
  page = 1;
  

  
  ngOnInit() {
      this.renderer.setStyle(document.body, 'background', "#dbd5f4"); 
      this.filmService.searchMenu = true;
      this.getPopularFilms();
      this.getGenres();
  }

  getPopularFilms(){
    this.filmService.getPopularFilms().subscribe(
      filmList => {
        this.filmList = filmList;
        console.log(filmList);
        this.checkCountsOfFilms(); //For correct grid visible
      },
      err => { 
        console.log(err); 
      },
      () => {  }) 
  }

   getGenres(){
    this.filmService.getGenres().subscribe(
      genre => {
        this.genreList = genre;
        console.log(genre)
      },
      err => { 
        console.log(err); 
      },
      () => {  }) 
  }

  getFilmsByQuery(searchFilm){
      this.filmService.getFilms(searchFilm).subscribe(
      filmList => {
        this.filmList = filmList;
        console.log(filmList)
      },
      err => { 
        console.log(err);
      },
      () => {  })
  }
  
  changeView(view){
    this.viewOfFilms = view;
    this.checkCountsOfFilms(); 
  }

  @HostListener('window:resize') onResize(){
    this.checkCountsOfFilms();
  }

 //For correct grid visible
  checkCountsOfFilms(){
    if (document.body.clientWidth>974&&this.viewOfFilms==='V'&&this.filmList.length%3 == 2) { 
      console.log(document.body.clientWidth);
      console.log(window);
      if (this.emptyList.length==0) {
        this.emptyList.push({});
      }
    }
    else {
      this.emptyList =[];
    }
  }

  

}
