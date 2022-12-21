import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-codepen',
  templateUrl: './codepen.component.html',
  styleUrls: ['./codepen.component.css']
})

export class CodepenComponent implements OnInit{
//declaramos los tipos de datos a traer
    //dato simple
    codepen: string = '';

//en el constructor: "datos" es un alias "DatosService" es el nombre del servicio
  constructor(private datos: DatosService) {}

  ngOnInit(): void {//trae los datos

    //"datos es el alias que se usa en el constructor,"obtenerDatos" es el nombre del metodo que se declaro en el servicio.
    this.datos.obtenerDatos().subscribe(data =>{
      //despues del this va la variable del dato a traer que declaramos en datos simple o datos array
      //despues de data va la variable que declaramos en el JSON que contiene el dato a traer
      this.codepen = data.codepen;
    })
  }
}
