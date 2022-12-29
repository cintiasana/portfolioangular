import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      trabajo: ['', [Validators.required]],
      logoTrabajo: ['',[Validators.required]]
    })
  }

  ngOnInit() {}

  get Trabajo(){
    return this.form.get("trabajo");
  }

  get LogoTrabajo(){
    return this.form.get("logoTrabajo");
  }

  get LogoTrabajoValid(){
    return this.LogoTrabajo?.touched && !this.LogoTrabajo?.valid;
  }

  get TrabajoValid() {
    return this.Trabajo?.touched && !this.Trabajo?.valid;
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
