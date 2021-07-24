import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { Hero } from '../../interface/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes Component: Selected hero ${hero.name}`);
  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
