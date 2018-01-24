import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {

    constructor(private crisisService: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        let id = route.paramMap.get('id');

        return this.crisisService.getCrisis(id).take(1).map(crisis => {
            if (crisis) {
                return crisis;
            } else { // id not found
                this.router.navigate(['/crisis-center']);
                return null;
            }
        });
    }
}
