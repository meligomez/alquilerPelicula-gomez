import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { Pelicula } from '../peliculas/peliculas-list/pelicula';
import { CarritoComponent } from './carrito.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // Local variable which stores
  public itemsCarrito:Pelicula[] = [];
  public peliculasCarrito = new Subject<Pelicula[]>();

  private carritoComponent!: CarritoComponent;

  getPeliculas(): Observable<Pelicula[]> {
    // console.log('this.itemsCarrito :', this.itemsCarrito , "cart itemsss "+JSON.stringify(this.products));
    return this.peliculasCarrito.asObservable();
  }

  setPeliculas(peliculasCarrito:any) {
    this.itemsCarrito.push(peliculasCarrito);
    this.peliculasCarrito.next(peliculasCarrito);
  }

  // agrega la peli al carrito
  agregarPeliculaACarrito(pelicula:Pelicula) {
    this.itemsCarrito.push(pelicula);
    this.peliculasCarrito.next(this.itemsCarrito);
  }

  eliminarPeliculaDelCarrito(peliculaId:number) {
    this.itemsCarrito.map((item, index) => {
      if (item.id_movie === peliculaId) {
        this.itemsCarrito.splice(index, 1);
      }
    });

    this.peliculasCarrito.next(this.itemsCarrito);
  }

  vaciarCarrito() {
    this.itemsCarrito.length = 0;
    this.peliculasCarrito.next(this.itemsCarrito);
  }

  obtenerPrecioTotal() {
    let total = 0;

    this.itemsCarrito.map(item => {
      total += item.precio;
    });

    return total
  }

  // abrirCarrito(){
  //   debugger
  //     // and use the reference from the component itself
  //     const modalRef = this._modalService.open(CarritoComponent);
  //      modalRef.componentInstance.pelicula = pelicula;
  // }
}
