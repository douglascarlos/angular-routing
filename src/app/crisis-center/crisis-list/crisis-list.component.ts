import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
  providers: [
    CrisisService
  ]
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      });
  }

}
