import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.component.html',
  styleUrls: ['./editperfil.component.css']
})
export class EditperfilComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      nombrePerfil: ['', [Validators.required]],
      fotoPerfil: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  get NombrePerfil(){
    return this.form.get("nombrePerfil");
  }

  get NombrePerfilValid(){
    return this.NombrePerfil?.touched && !this.NombrePerfil?.valid;
  }

  get FotoPerfil(){
    return this.form.get("fotoPerfil");
  }

  get FotoPerfilValid(){
    return this.FotoPerfil?.touched && !this.FotoPerfil?.valid;
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

