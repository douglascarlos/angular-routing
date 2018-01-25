import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

const appRoutes: Routes = [
    { 
      path: '',   
      redirectTo: '/heroes', pathMatch: 'full' 
    },
    {
      path: 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
    },
    { 
      path: '**', 
      component: NotFoundComponent 
    },
    {
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },
  ];;

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ],
    providers: [
      CanDeactivateGuard
    ]
  })
export class AppRoutingModule {
}
