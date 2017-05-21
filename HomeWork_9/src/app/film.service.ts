import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
  searchUrl: string = 'http://www.omdbapi.com/?apikey=520bbe17&page=1&s=';
  filmUrl: string = 'http://www.omdbapi.com/?apikey=520bbe17&i=';

  constructor(private http: Http) { }

  private extractListFilms(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  private extractFilm(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    return this.http.get(this.searchUrl + filmName).map(this.extractListFilms);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId).map(this.extractFilm);
  }

}
