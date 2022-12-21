import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {
  linkedin: string = '';

  constructor (private datos: DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.linkedin = data.linkedin;
    })
  
  }

}
