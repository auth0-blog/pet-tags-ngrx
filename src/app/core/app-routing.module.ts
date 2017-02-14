import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from '../home/home.component';
import { CreateComponent } from './../create/create.component';
import { CompleteComponent } from './../complete/complete.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'complete',
        component: CompleteComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
