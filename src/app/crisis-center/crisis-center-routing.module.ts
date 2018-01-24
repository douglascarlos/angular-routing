import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';

const crisisCenterRoutes: Routes = [
    {
      path: 'crisis-center',
      component: CrisisCenterComponent,
      children: [
        {
            path: '',
            component: CrisisListComponent,
            children: [
                // {
                //     path: ':id',
                //     component: CrisisDetailComponent,
                //     canDeactivate: [
                //         CanDeactivateGuard
                //     ]
                // },
                {
                    path: '',
                    component: CrisisCenterHomeComponent
                }
            ]
        },
        {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [
                CanDeactivateGuard
            ]
        },
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
export class CrisisCenterRoutingModule {}
