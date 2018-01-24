import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
import { Route } from '@angular/router/src/config';
import { HeroService } from '../hero.service';
import { slideInDownAnimation } from '../../animation';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [
    slideInDownAnimation
  ]
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap.switchMap(
      (parameters: ParamMap) => this.heroService.getHero(parameters.get('id'))
    );
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : hero;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
