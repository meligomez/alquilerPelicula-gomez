import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './peliculas-list/pelicula';
import { environment as env } from '../../../environments/environment';
import { DOCUMENT } from '@angular/common';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  /*Declaracion de variables */
  peliculas: Pelicula[]=[];
  detallePelicula!: PeliculaDetalleComponent;

  constructor(private http:HttpClient, @Inject(DOCUMENT) private document: Document) { }

  /*Listado de peliculas */
  getAllPeliculasJson(){
    return this.http.get<Pelicula[]>(`${env.endpoint}`)
  }

  getPeliculas(){
    return this.peliculas;
  }




}
