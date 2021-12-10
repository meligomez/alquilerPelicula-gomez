import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './peliculas-list/pelicula';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas: Pelicula[]=[];

  constructor(private http:HttpClient) { }

  getAllPeliculasJson(){
    return this.http.get<Pelicula[]>(`${env.endpoint}`)
  }

  getPeliculas(){
    return this.peliculas;
  }
}
