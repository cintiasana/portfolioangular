import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-textopresent',
  templateUrl: './textopresent.component.html',
  styleUrls: ['./textopresent.component.css']
})
export class TextopresentComponent implements OnInit {
  textoPresent:string='';

  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.textoPresent = data.textoPresent;
    })
  }

}
