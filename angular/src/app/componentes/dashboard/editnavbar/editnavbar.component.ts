import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editnavbar',
  templateUrl: './editnavbar.component.html',
  styleUrls: ['./editnavbar.component.css']
})
export class EditnavbarComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      linkedin: ['', [Validators.required]],
      github: ['', [Validators.required]],
      codepen: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  get Linkedin(){
    return this.form.get("linkedin");
  }

  get LinkedinValid(){
    return this.Linkedin?.touched && !this.Linkedin?.valid;
  }

  get Github(){
    return this.form.get("github");
  }

  get GithubValid(){
    return this.Github?.touched && !this.Github?.valid;
  }

  get Codepen(){
    return this.form.get("codepen");
  }

  get CodepenValid(){
    return this.Codepen?.touched && !this.Codepen?.valid;
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

