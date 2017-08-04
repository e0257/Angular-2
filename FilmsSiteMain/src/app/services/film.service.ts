import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Film } from '../models/Ifilm';

@Injectable()
export class FilmService {
  apikey = '0077bec633f957fbf7cd91c9c7026b27';
  imgURL = 'https://image.tmdb.org/t/p/w500/';
  searchMenu: boolean;
  viewOfFilms;

  constructor(private http: Http) { }

  getPopularFilms() {
    //this.curPage = 1;
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key='+this.apikey+'&language=ru-RU&page=1')
    .map((r: Response) => r.json().results || []);
  }

  getGenres(){
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+this.apikey+'&language=ru-RU&page=1')
    .map((r: Response) => r.json().genres || []);
  }

  getFilmById(filmId: number){
    return this.http.get('https://api.themoviedb.org/3/movie/'+ filmId+'?api_key='+this.apikey+'&language=ru-RU&page=1')
    .map((r: Response) => r.json() ||{});
  }

  getActors(filmId: number){
    return this.http.get('https://api.themoviedb.org/3/movie/'+ filmId+'/credits?api_key='+this.apikey)
    .map((r: Response) => r.json().cast || []);
  }

  getFilms(film) { 
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+this.apikey+'&language=ru-RU&query='+film+'&page=1&include_adult=false')
    .map((r: Response) => {
      console.log(r.json());
      return r.json().results || []});
  }
  

/*add */
  getFavoritesItem () {
    return this.http.get("http://localhost:4200/getFavoritesList")
      .map(res => res.json())
      .flatMap(
        favorites => {
          return Observable.forkJoin(
            favorites.filter(film => film.status)
                     .map(film => this.getFilmById(film.filmId))
          )
        }
      )
      ;
  }

  saveFavoriteItem (film) {
    return this.http.post("http://localhost:4200/saveFavoriteItem", film)
    .map(res => res.json());
  }

   inFavorite(film) {
    return this.http.post("http://localhost:4200/inFavorite", film).map(res => res.json()||false);
  }
 
}
