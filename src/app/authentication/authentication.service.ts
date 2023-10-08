// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  constructor() {}

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return !!this.token;
  }

  logout() {
    this.token = null;
    // Perform any other necessary cleanup
  }
}
