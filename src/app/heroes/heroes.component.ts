import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "../mock-heroes";

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
  heroes = HEROES;

  //property selected hero
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // <li> click event handler
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
}
