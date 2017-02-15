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

          // On successful authentication and profile retrieval, go to /create route
          this.router.navigate(['/create']);
        });
      } else if (authResult && !authResult.idToken) {
        // Authentication failed
        throw Error(`There was an error authenticating: ${authResult}`);
      }
    });
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  get authenticated() {
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

}
