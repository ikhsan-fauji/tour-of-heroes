import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroes } from '../data/mock-heroes';
import { Hero } from '../interface/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }
}