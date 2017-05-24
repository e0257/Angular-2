import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Film } from './int-film';

@Injectable()
export class FilmService {
  searchUrl: string = 'http://www.omdbapi.com/?apikey=520bbe17&s=';
  filmUrl: string = 'http://www.omdbapi.com/?apikey=520bbe17&i=';

  constructor(private http: Http) { }

  getFilms(filmName: string) {
    return this.http.get(this.searchUrl + filmName).map((r: Response) => r.json().Search || {});
  }

  getFilmById(filmId: string) {
    return this.http.get(this.filmUrl + filmId).map((r: Response) => <Film[]>r.json() ||
      {
        Released: '',
        Plot: '',
        Genre: '',
        imdbRating: '',
        Director: '',
        Runtime: ''
      });
  }

}
