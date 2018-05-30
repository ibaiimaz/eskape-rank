import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <div class="auth-form">
      <h1>Log in into My Escape Rank</h1>
      <button type="button" (click)="loginWithGoogle()">
        <i class="fab fa-google"></i>
        Login with google
      </button>
    </div>
  `
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async loginWithGoogle() {
    try {
      await this.authService.loginWithGoogle();
      this.router.navigate(['/'])
    } catch (err) {
      console.log('Error: ', err.message);
    }
  }
}
