import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-logonavbar',
  templateUrl: './logonavbar.component.html',
  styleUrls: ['./logonavbar.component.css']
})
export class LogonavbarComponent implements OnInit {
  logoNavbar: string = '';

  constructor(private dato: DatosService){}
  ngOnInit(): void {
    this.dato.obtenerDatos().subscribe(data => {
      this.logoNavbar = data.logoNavbar;
    })
  
  }

}
