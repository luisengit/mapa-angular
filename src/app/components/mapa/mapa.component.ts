import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../shared/classes/marcador.class';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'map-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackBar: MatSnackBar) {

    if ( localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() {
  }

  agregarMarcador( evento ) {

    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push( nuevoMarcador );

    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  borrarMarcador( i: number ) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 });
  }

  guardarStorage() {

    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }

}
