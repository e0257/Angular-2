import { Injectable } from '@angular/core';
import { FilmService } from './film.service';

@Injectable()
export class ExtraService {

  constructor(private filmService: FilmService) { }

}
