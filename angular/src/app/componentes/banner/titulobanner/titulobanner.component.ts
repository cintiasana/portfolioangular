import { Component } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-titulobanner',
  templateUrl: './titulobanner.component.html',
  styleUrls: ['./titulobanner.component.css']
})
export class TitulobannerComponent {
  tituloBanner: string = '';

  constructor(private datos: DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.tituloBanner = data.tituloBanner;

    })
  }

}

