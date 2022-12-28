import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      contactoNombre: ['', [Validators.required]],
      contactoEmail: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}

  get ContactoNombre(){
    return this.form.get("contactoNombre");
  }

  get ContactoEmail(){
    return this.form.get("contactoEmail");
  }

  get ContactoEmailValid(){
    return this.ContactoEmail?.touched && !this.ContactoEmail?.valid;
  }

  get ContactoNombreValid() {
    return this.ContactoNombre?.touched && !this.ContactoNombre?.valid;
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