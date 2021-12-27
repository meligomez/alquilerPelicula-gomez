import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RolUsuario } from './models/rol_usuario';
import { Usuario } from './models/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers(user: string,password: string){
    return this.http.get<Usuario[]>(`${environment.endpointMockApi}/users/`)
  }

  registrarUser(nombre: string, apellido: string, user: string,password: string){
    let body = {
      "name":nombre,
      "apellido":apellido,
      "password":password,
      "username":user
    }
    return this.http.post<Usuario>(`${environment.endpointMockApi}/users/`,body)
  }

  getPermisos(){
    return this.http.get<RolUsuario>(`${environment.endpointMockApi}/rol/`)
  }

  getUserActual(){
    const userActual = localStorage.getItem('user') || '';
    return JSON.parse(userActual);
  }
}
