import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  imageSource: any;

  constructor(private domSanitizer : DomSanitizer) {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      saveToGallery: true
    });

    this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "");
  }

  getPhoto() {
    return this.imageSource;
  }
}
