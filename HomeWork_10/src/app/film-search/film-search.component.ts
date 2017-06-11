import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  search: string = '';
  viewCard: string = '';
  control: FormControl;
  listFilmsAuto: any;
  test: any;

  @Output()
  searchEv = new EventEmitter();

  @Output()
  viewEv = new EventEmitter();

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.control = new FormControl();
    this.control.valueChanges
      .debounceTime(200)
      .filter(searchValue => {
        searchValue = searchValue || "";
        return searchValue.length > 1;
      })
      .switchMap(name => this.filmCardService.getFilms(name))
      .subscribe(data => {
        console.log(data);
        return this.listFilmsAuto = data;
      });
  }

  searchFilm() {
    console.log(this.listFilmsAuto);
    this.searchEv.emit(this.search);
  }

  selectView() {
    this.viewEv.emit(this.viewCard);
  }


}
