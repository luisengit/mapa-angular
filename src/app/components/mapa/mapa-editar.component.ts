import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'map-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data);
  }

  ngOnInit() {
  }

}
