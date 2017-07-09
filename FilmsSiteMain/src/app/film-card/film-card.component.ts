import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  imgUrl = this.filmService.imgURL; 

  @Input() 
  filmDetail;

  @Input() 
  genreList;

   ngOnInit() {   
  }

  truncString(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 3) + '...' : str;
  }

  genresOfFilm(){
      if (this.filmDetail.genres){
               return  this.filmDetail.genres
                  .map(e => e.name)
                  .join(',')
      }
      else if (this.filmDetail.genre_ids) {
              return this.genreList
                  .filter( e => this.filmDetail.genre_ids.includes(e.id))
                  .map(e => e.name)
                  .join(',');
      }
  }
 
 

}
