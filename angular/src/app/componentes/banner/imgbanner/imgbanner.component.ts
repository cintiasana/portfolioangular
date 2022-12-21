import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-imgbanner',
  templateUrl: './imgbanner.component.html',
  styleUrls: ['./imgbanner.component.css']
})
export class ImgbannerComponent implements OnInit{
  imgBanner: string='';

  constructor (private datos:DatosService){}
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.imgBanner = data.imgBanner;
    })
    
  }

}
