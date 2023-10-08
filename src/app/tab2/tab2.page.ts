import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filtroRestaurantes: boolean = false;
  filtroCinemas: boolean = false;
  filtroParques: boolean = false;
  
  constructor() {}

  locais = [
    {
      nome: 'Restaurante A',
      tipo: 'Restaurante',
      endereco: 'Endereço do Restaurante A',
      linkGoogleMaps: 'https://maps.google.com/?q=Restaurante+A',
    },
    {
      nome: 'Cinema B',
      tipo: 'Cinema',
      endereco: 'Endereço do Cinema B',
      linkGoogleMaps: 'https://maps.google.com/?q=Cinema+B',
    },
    {
      nome: 'Parque C',
      tipo: 'Parque',
      endereco: 'Endereço do Parque C',
      linkGoogleMaps: 'https://maps.google.com/?q=Parque+C',
    },
    // Adicione mais locais aqui
  ];

  get locaisFiltrados() {
    return this.locais.filter((local) => {
      return (
        (!this.filtroRestaurantes || local.tipo === 'Restaurante') &&
        (!this.filtroCinemas || local.tipo === 'Cinema') &&
        (!this.filtroParques || local.tipo === 'Parque')
      );
    });
  }
}
