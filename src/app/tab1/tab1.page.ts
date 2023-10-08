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

  constructor(private authService: AuthService) { }

  async login()
  {
    try {
      const result = await GoogleAuth.signIn();

      if (result && result.authentication) {
        console.log('Google login success', result);
        this.authService.setToken(result.authentication.accessToken);

        // You can now handle the user's login information (result) as needed.
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

}
