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

  @Output()
  searchEv = new EventEmitter();

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.setView();
  }

setView(){
  this.filmService.viewOfFilms = this.viewOfFilms;
}

searchFilm() {
    this.searchEv.emit(this.searchValue);
  }

}
