import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any=[];

  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.educacion = data.educacion;
    })
  }

}
