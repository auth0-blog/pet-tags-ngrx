import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock('[YOUR_AUTH0_CLIENT_ID]', '[YOUR_AUTH0_CLIENT_DOMAIN]', {
    auth: {
      redirectUrl: 'http://localhost:4200',
      responseType: 'token'
    }
  });
  userProfile: Object;
  loginRedirect: string;

  constructor(private router: Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    this.loginRedirect = localStorage.getItem('login_redirect');

    // Add callback for lock 'hash_parsed' event
    // hash_parsed is needed because we're redirecting
    this.lock.on('hash_parsed', (authResult) => {
      if (authResult && authResult.idToken) {
        // Successful authentication result
        localStorage.setItem('id_token', authResult.idToken);

        // Get user profile
        this.lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            throw Error('There was an error retrieving profile data.');
          }

          localStorage.setItem('profile', JSON.stringify(profile));
          this.userProfile = profile;

          // Redirect on successful login
          if (this.loginRedirect) {
            this.router.navigate([this.loginRedirect]);
            localStorage.removeItem('login_redirect');
            this.loginRedirect = undefined;
          }
        });
      } else if (authResult && !authResult.idToken) {
        // Authentication failed
        throw Error(`There was an error authenticating: ${authResult}`);
      }
    });
  }

  login() {
    // Call the show method to display the Lock widget
    this.lock.show();
    // Store the redirect location when opening the login box
    localStorage.setItem('login_redirect', window.location.pathname);
  }

  logout() {
    // Remove token and profile
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }

  get authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

}
