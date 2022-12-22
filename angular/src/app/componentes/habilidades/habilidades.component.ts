import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades:any=[];

  constructor(private datos: DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.habilidades = data.habilidades;
    })
    
  }

}
