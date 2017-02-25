import { HeroService } from './hero.service';
import { Hero } from './hero';
import { selector } from 'rxjs/operator/multicast';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'views/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}