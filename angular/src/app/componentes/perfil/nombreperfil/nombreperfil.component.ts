import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-nombreperfil',
  templateUrl: './nombreperfil.component.html',
  styleUrls: ['./nombreperfil.component.css']
})
export class NombreperfilComponent implements OnInit {
  nombrePerfil: string='';

  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.nombrePerfil = data.nombrePerfil;
    })
    
  }

}
