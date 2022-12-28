import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  form!: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      crearContrasena: ['', [Validators.required]],
      crearUsuarioEmail: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}

  get CrearContrasena(){
    return this.form.get("crearContrasena");
  }

  get CrearUsuarioEmail(){
    return this.form.get("crearUsuarioEmail");
  }

  get CrearUsuarioEmailValid(){
    return this.CrearUsuarioEmail?.touched && !this.CrearUsuarioEmail?.valid;
  }

  get CrearContrasenaValid() {
    return this.CrearContrasena?.touched && !this.CrearContrasena?.valid;
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