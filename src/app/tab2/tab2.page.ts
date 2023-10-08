import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import axios, { AxiosRequestConfig } from 'axios';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private googlePlacesApiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  filtroCinemas: boolean = false;
  filtroParques: boolean = false;
  filtroRestaurantes: boolean = false;
  
  locais: any = [];

  constructor() {}

  ngOnInit() {
    setInterval(async () => {
      this.locais = []
      if(this.filtroCinemas)
        this.locais = [...this.locais, ...await this.searchPlaces("movie_theater")]

      if(this.filtroRestaurantes)
        this.locais = [...this.locais, ...await this.searchPlaces("restaurant")]

      if(this.filtroParques)
        this.locais = [...this.locais, ...await this.searchPlaces("park")]
    }, 10000);
  }

  get locaisFiltrados() {
    return this.locais
  }

  async searchPlaces(type: string) {
    try {
      const coordinates: any = await this.obterLocalizacaoUsuario()

      const request: AxiosRequestConfig  = {
        headers: {
          'Origin': 'http://localhost:8100',
        },
        params:
        {
          location: `${coordinates.latitude}, ${coordinates.longitude}`,
          radius: '100',
          type: type,
          key: 'AIzaSyB1M3F4Xo7rylN_9hcyAAuABSVVb5VSiOE'
        }
      };
  
      return (await axios.get(`https://cors-anywhere.herokuapp.com/${this.googlePlacesApiUrl}`, request)).data.results;
    } catch (error) {
      return error
    }
  }

  async obterLocalizacaoUsuario() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      return {latitude: coordinates.coords.latitude, longitude: coordinates.coords.longitude}
    } catch (error) {
      return error
    }
  }  
}
