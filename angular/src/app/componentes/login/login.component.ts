import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      contrasena: ['', [Validators.required]],
      usuarioEmail: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}

  get Contrasena(){
    return this.form.get("contrasena");
  }

  get UsuarioEmail(){
    return this.form.get("usuarioEmail");
  }

  get UsuarioEmailValid(){
    return this.UsuarioEmail?.touched && !this.UsuarioEmail?.valid;
  }

  get ContrasenaValid() {
    return this.Contrasena?.touched && !this.Contrasena?.valid;
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
