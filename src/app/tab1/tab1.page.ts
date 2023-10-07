import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  async login()
  {
    try {
      const result = await GoogleAuth.signIn();

      if (result && result.authentication) {
        console.log('Google login success', result);
        // You can now handle the user's login information (result) as needed.
      } else {
        console.error('Google login failed');
      }
    } catch (error) {
      console.error('Google login error', error);
    }
  }


}
