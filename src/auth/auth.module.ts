import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
// import { LoginModule } from './login/login.module';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseOptions } from '@firebase/app-types';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' }
    ]
  }
];

export const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyATBkFERDADbmkTe1OGQcutjIVFvNHubjg',
  authDomain: 'myescaperank.firebaseapp.com',
  databaseURL: 'https://myescaperank.firebaseio.com',
  projectId: 'myescaperank',
  storageBucket: 'myescaperank.appspot.com',
  messagingSenderId: '497280820107'
};

@NgModule({
  imports: [
    CommonModule,
    // LoginModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    SharedModule
  ]
})
export class AuthModule {}
