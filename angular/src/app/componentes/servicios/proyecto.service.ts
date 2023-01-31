import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url= 'http://localhost:8080/proyecto/';

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public verProyecto(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public agregarProyecto(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }

  public updateProyecto(proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', proyecto);
  }

  public eliminarProyecto(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
