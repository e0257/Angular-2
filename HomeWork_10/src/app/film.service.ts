import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Film } from './int-film';

@Injectable()
export class FilmService {
  private curPage = 1;
  searchUrl: string = `http://www.omdbapi.com/?apikey=520bbe17`;
  filmUrl: string = 'http://www.omdbapi.com/?apikey=520bbe17&i=';
  film: Film;

  constructor(private http: Http) { }

  getFilms(filmName: string) {
    this.curPage = 1;
    return this.http.get(this.searchUrl + '&s=' + filmName).map((r: Response) => r.json().Search || {});
  }

  getPageFilms(filmName: string){
    this.curPage += 1;
    return this.http.get(this.searchUrl+`&page=${this.curPage}&s=`+filmName).map((r: Response) => r.json().Search || []);
  }

  getFilmById(filmId: string) {
    return this.http.get(this.filmUrl + filmId).map((r: Response) => <Film[]>r.json() || this.film);
  }

}
