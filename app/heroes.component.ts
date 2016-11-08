import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: '../app/heroes.component.html',
  styleUrls: [ '../app/heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then((heroes) => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
