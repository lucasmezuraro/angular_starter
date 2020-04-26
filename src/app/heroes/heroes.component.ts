import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

import {Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: 'Lucas'
  }

  heroes: Hero[]; 

  selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
}

getHeroes(): void {
   this.heroService.getHeroes().
      subscribe((payload) => this.heroes = payload);
}


  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
