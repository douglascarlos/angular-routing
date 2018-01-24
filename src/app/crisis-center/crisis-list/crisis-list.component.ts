import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
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
    private crisisService: CrisisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCrisises();
  }

  getCrisises(): void {
    this.crises$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      });
  }

}
