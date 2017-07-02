import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  imgUrl = this.filmService.imgURL;
  isLoad = false;
  

  @Input() 
  filmDetail;

  @Input() 
  genreList;

   ngOnInit() {
    console.log(this.filmDetail);
  }

  ngAfterContentInit(){ this.isLoad = true}

  truncString(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 3) + '...' : str;
  }

  genresOfFilm(){
      return this.filmDetail.genres
                ?this.filmDetail.genres
                  .map(e => e.name)
                  .join(',')
                :this.genreList
                  .filter( e => this.filmDetail.genre_ids.includes(e.id))
                  .map(e => e.name)
                  .join(',');
  }
 
 

}
