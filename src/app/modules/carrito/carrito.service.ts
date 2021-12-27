import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { Pelicula } from '../peliculas/peliculas-list/pelicula';
import { CarritoComponent } from './carrito.component';
import { PeliculasService } from '../peliculas/peliculas.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient, private _svcPelicula:PeliculasService) { }

  // Local variable which stores
 // public itemsCarrito:Pelicula[] = [];
  //public peliculasCarrito = new Subject<Pelicula[]>();

  private carritoComponent!: CarritoComponent;

  getPeliculas(): Observable<Pelicula[]> {
    // console.log('this.itemsCarrito :', this.itemsCarrito , "cart itemsss "+JSON.stringify(this.products));
    return this.http.get<Pelicula[]>(`${environment.endpointMockApi}/cart/`);
  }

  // setPeliculas(peliculasCarrito:any) {
  //   this.itemsCarrito.push(peliculasCarrito);
  //   this.peliculasCarrito.next(peliculasCarrito);
  // }

  // agrega la peli al carrito
  agregarPeliculaACarrito(pelicula:Pelicula) {
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
    return  this.http.post<Pelicula>(`${environment.endpointMockApi}/cart/`,body);
  }

  eliminarPeliculaDelCarrito(idCarrito:number) {
    let peliFiltrada:Pelicula[];
    // this.itemsCarrito.map((item, index) => {
    //   if (item.id_movie === peliculaId) {
    //     this.itemsCarrito.splice(index, 1);
    //   }
    // });

    // this.peliculasCarrito.next(this.itemsCarrito);
    console.log(idCarrito);
    return this.http.delete<Pelicula>(`${environment.endpointMockApi}/cart/${idCarrito}`);
  }

  vaciarCarrito(peliculas:Pelicula[]) {
    // this.itemsCarrito.length = 0;
    // this.peliculasCarrito.next(this.itemsCarrito);

    peliculas.forEach(peli=>
      this.eliminarPeliculaDelCarrito(peli.id).subscribe(
        (pelicula:Pelicula)=>
          {
            console.log("elimino una peli")
          }
      )
    );

  }


  getAllPeliculasCarrito(){
    return this.http.get<Pelicula[]>(`${environment.endpointMockApi}/cart`)
  }

  // abrirCarrito(){
  //   debugger
  //     // and use the reference from the component itself
  //     const modalRef = this._modalService.open(CarritoComponent);
  //      modalRef.componentInstance.pelicula = pelicula;
  // }
}
