import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../app/material.module';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './containers/login/login.component';

// import { AuthService } from '../shared/services/auth/auth.service';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    // AuthService
  ]
})
export class LoginModule {}
