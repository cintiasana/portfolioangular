import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any = [];

  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencias = data.experiencias;
    })
  }

}
