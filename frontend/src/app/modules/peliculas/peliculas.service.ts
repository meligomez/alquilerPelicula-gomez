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

  getAllPeliculas(){
    return this.http.get<Pelicula[]>(`${env.endpointMockApi}/movies`)
  }

   // agrega la peli
   agregarPelicula(pelicula:Pelicula) {
    let body = {
      "id_movie":pelicula.id_movie,
      "movie_title": pelicula.movie_title,
      "director_name": pelicula.director_name,
      "actor_1_name": pelicula.actor_1_name,
      "actor_2_name": pelicula.actor_2_name,
      "genres": pelicula.genres,
      "language": pelicula.language,
      "country": pelicula.country,
      "content_rating": pelicula.content_rating,
      "title_year": pelicula.title_year,
      "movie_imdb_link": pelicula.movie_imdb_link,
      "precio": pelicula.precio
    }

    // this.itemsCarrito.push(pelicula);
    // this.peliculasCarrito.next(this.itemsCarrito);
    return  this.http.post<Pelicula>(`${env.endpointMockApi}/create/`,body);
  }

  actualizarPelicula(pelicula:Pelicula) {
    let body = {
      "id_movie":pelicula.id_movie,
      "movie_title": pelicula.movie_title,
      "director_name": pelicula.director_name,
      "actor_1_name": pelicula.actor_1_name,
      "actor_2_name": pelicula.actor_2_name,
      "genres": pelicula.genres,
      "language": pelicula.language,
      "country": pelicula.country,
      "content_rating": pelicula.content_rating,
      "title_year": pelicula.title_year,
      "movie_imdb_link": pelicula.movie_imdb_link,
      "precio": pelicula.precio
    }

    // this.itemsCarrito.push(pelicula);
    // this.peliculasCarrito.next(this.itemsCarrito);
    return  this.http.post<Pelicula>(`${env.endpointMockApi}/create/`,body);
  }
}
