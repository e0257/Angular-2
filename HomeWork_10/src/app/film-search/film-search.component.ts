import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  search: string = '';
  view: string = '';

  @Output()
  searchEv = new EventEmitter();

  @Output()
  viewEv = new EventEmitter();

  constructor() { }

  searchFilm() {
    this.searchEv.emit(this.search);
  }

  selectView() {
    this.viewEv.emit(this.view);
  }


}
