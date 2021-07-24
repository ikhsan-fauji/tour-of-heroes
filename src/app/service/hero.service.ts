import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroes } from '../data/mock-heroes';
import { Hero } from '../interface/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
