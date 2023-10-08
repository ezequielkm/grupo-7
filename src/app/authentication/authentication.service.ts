// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private username: string = "";
  private userphoto: string = "";

  constructor() {}

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setUserphoto(userphoto: string) {
    this.userphoto = userphoto;
  }

  getUsername() {
    return this.username;
  }

  getUserphoto() {
    return this.userphoto;
  }

  isLoggedIn() {
    return !!this.token;
  }

  logout() {
    this.token = null;
    // Perform any other necessary cleanup
  }
}
