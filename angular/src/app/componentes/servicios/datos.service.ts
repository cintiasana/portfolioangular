import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuesta asincrona
import { Observable, observable } from 'rxjs';
//hacer peticiones y CRUD
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatosService {
  //http (se puede reemplazar) = alias
    constructor(private http:HttpClient) { }

  //metodo observable que devuelve los datos
  obtenerDatos():Observable<any>{
//retorno de datos utilizando el metodo get ed HttpClient que llama a la base de datos JSON o a una URL
    return this.http.get('./assets/json/portfolioAngular.json');
//aca podria poner un callback para ver la opcion de problemas de conexion del servidor
  }
}
