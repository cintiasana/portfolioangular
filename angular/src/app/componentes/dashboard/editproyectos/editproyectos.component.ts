import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit{
  form: FormGroup;

  //inyectar en el constructor el formulario formBuilder
  constructor(private formBuilder: FormBuilder){
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      tituloProyecto: ['', [Validators.required]],
      fotoProyecto: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      descripcionProyecto: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  get TituloProyecto(){
    return this.form.get("tituloProyecto");
  }

  get TituloProyectoValid(){
    return this.TituloProyecto?.touched && !this.TituloProyecto?.valid;
  }

  get FotoProyecto(){
    return this.form.get("fotoProyecto");
  }

  get FotoProyectoValid(){
    return this.FotoProyecto?.touched && !this.FotoProyecto?.valid;
  }

  get UrlProyecto(){
    return this.form.get("urlProyecto");
  }

  get UrlProyectoValid(){
    return this.UrlProyecto?.touched && !this.UrlProyecto?.valid;
  }
  get DescripcionProyecto(){
    return this.form.get("descripcionProyecto");
  }

  get DescripcionProyectoValid(){
    return this.DescripcionProyecto?.touched && !this.DescripcionProyecto?.valid;
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


