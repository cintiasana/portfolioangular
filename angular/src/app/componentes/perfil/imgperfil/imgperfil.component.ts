import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-imgperfil',
  templateUrl: './imgperfil.component.html',
  styleUrls: ['./imgperfil.component.css']
})
export class ImgperfilComponent implements OnInit {
  imgPerfil: string='';

  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.imgPerfil = data.imgPerfil;
    })
  }

}
