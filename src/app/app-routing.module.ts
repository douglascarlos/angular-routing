import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { 
      path: '',   
      redirectTo: '/heroes', pathMatch: 'full' 
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
      RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
  })
export class AppRoutingModule {
}
