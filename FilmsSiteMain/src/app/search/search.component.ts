import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilmService } from '../services/film.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  viewOfFilms: string = "V";
  searchValue: string;
  autocompleteValues: Array<string>;

  @Output()
  searchEv = new EventEmitter();

  @Output()
  viewEv = new EventEmitter();

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.setView();
  }

setView(){ 
  this.viewEv.emit(this.viewOfFilms);
  this.filmService.viewOfFilms = this.viewOfFilms;
}

searchFilm() {
    this.searchEv.emit(this.searchValue);
  }

autocomplete(){
      if(this.searchValue){
        this.filmService.getFilms(this.searchValue).subscribe(
          filmList => {
            this.autocompleteValues = filmList
                                      .map(e => e.title)
                                      .filter((e,i)=>i<6);
          },
          err => { console.log(err); },
          () => {  }
        );
      }
  }

}
