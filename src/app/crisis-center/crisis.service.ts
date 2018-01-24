import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';

@Injectable()
export class CrisisService {
  getCrises() { 
    return Observable.of(CRISES); 
  }

  getCrisis(id: number | string) {
    return this.getCrises()
      .map(crises => crises.find(crisis => crisis.id === +id));
  }
}
