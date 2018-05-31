import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Store } from '../store';

import { AuthModule } from '../auth/auth.module';

// services
import { AuthService } from '../auth/shared/services/auth/auth.service';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ranking' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    Store,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
