import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Educacion } from '../modelo/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url= 'http://localhost:8080/educacion/';

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public verEducacion(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `ver/${id}`);
  }

  public agregarEducacion(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }

  public updateEducacion(educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', educacion);
  }

  public eliminarEducacion(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
