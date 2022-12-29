import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edithabilidades',
  templateUrl: './edithabilidades.component.html',
  styleUrls: ['./edithabilidades.component.css']
})
export class EdithabilidadesComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      habilidad: ['', [Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

  ngOnInit() {}

  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  get TrabajoValid() {
    return this.Habilidad?.touched && !this.Habilidad?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
}
}
