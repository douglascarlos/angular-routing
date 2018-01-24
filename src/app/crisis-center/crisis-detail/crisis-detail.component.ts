import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Crisis } from '../crisis';
import { Route } from '@angular/router/src/config';
import { CrisisService } from '../crisis.service';
import { slideInDownAnimation } from '../../animation';

@Component({
  selector: 'crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [
    slideInDownAnimation
  ]
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) {}

  ngOnInit() {
    console.log('aquiii');
    this.crisis$ = this.route.paramMap.switchMap(
      (parameters: ParamMap) => this.crisisService.getCrisis(parameters.get('id'))
    );
  }

  gotoCrises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : crisis;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}
