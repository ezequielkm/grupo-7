import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AuthService } from '../authentication/authentication.service';
import { LogoutComponent } from '../authentication/logout.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username: string = "";
  userphoto: string = "";

  constructor(private authService: AuthService) { }

  async login()
  {
    try {
      const result = await GoogleAuth.signIn();

      if (result && result.authentication) {
        this.authService.setToken(result.authentication.accessToken);
        this.authService.setUsername(`${result.givenName} ${result.familyName}`);
        this.authService.setUserphoto(result.imageUrl);
      } else {
        console.error('Google login failed');
      }
    } catch (error) {
      console.error('Google login error', error);
    }
  }

  async logout()
  {
    this.authService.logout();
  }

  isLoggedIn()
  {
    this.username = this.authService.getUsername()
    this.userphoto = this.authService.getUserphoto()
    return this.authService.isLoggedIn()
  }
}
