import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';

@Injectable()
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  getCrises() { return this.crises$; }

  getCrisis(id: number | string) {
    return this.getCrises()
      .map(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
