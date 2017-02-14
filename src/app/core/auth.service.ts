import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock('[CLIENT_ID]', '[CLIENT_DOMAIN]', {
    auth: {
      redirectUrl: 'http://localhost:4200',
      responseType: 'token'
    }
  });
  userProfile: Object;

  constructor(private router: Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock 'hash_parsed' event
    this.lock.on('hash_parsed', (authResult) => {
      if (authResult && authResult.idToken) {
        localStorage.setItem('id_token', authResult.idToken);

        // Get user profile
        this.lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            throw Error('There was an error retrieving profile data.');
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          this.userProfile = profile;
          this.router.navigate(['/create']);
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
  }

  logout() {
    // Remove token and profile
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  get authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

}
