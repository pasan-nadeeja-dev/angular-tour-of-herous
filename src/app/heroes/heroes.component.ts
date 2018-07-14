import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // property hero
  // hero: Hero = {
  //   id : 1,
  //   name : 'Windstorm'
  // };

  // property HEROES
  heroes : Hero[];

  //property selected hero
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // <li> click event handler
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  //call below function to get data from service in assynchronous
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
