import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    {
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },
    {
      path: 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
      canLoad: [
        AuthGuard
      ]
    },
    {
      path: 'crisis-center',
      loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
      data: { preload: true }
    },
    { 
      path: '',   
      redirectTo: '/superheroes', pathMatch: 'full' 
    },
    { 
      path: '**', 
      component: NotFoundComponent 
    },
  ];;

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes, 
        {
          enableTracing: false,
          preloadingStrategy: SelectivePreloadingStrategy
        }
      )
    ],
    exports: [
        RouterModule
    ],
    providers: [
      CanDeactivateGuard,
      SelectivePreloadingStrategy
    ]
  })
export class AppRoutingModule {
}
