import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      tituloCertificado: ['', [Validators.required]],
      fotoCertificado: ['',[Validators.required]]
    })
  }

  ngOnInit() {}

  get TituloCertificado(){
    return this.form.get("tituloCertificado");
  }

  get FotoCertificado(){
    return this.form.get("fotoCertificado");
  }

  get ContactoEmailValid(){
    return this.FotoCertificado?.touched && !this.FotoCertificado?.valid;
  }

  get TituloCertificadoValid() {
    return this.TituloCertificado?.touched && !this.TituloCertificado?.valid;
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