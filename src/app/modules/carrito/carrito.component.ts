import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pelicula } from '../peliculas/peliculas-list/pelicula';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 // public cartItems!: Pelicula[];
  public totalAmmount:number=0;
  closeResult: string | undefined;
  @Input()
  pelicula!: Pelicula[];

  constructor(
    private _srvCarrito: CarritoService,private _modalService: NgbModal
  ) { }

  ngOnInit() {

    console.log('carrito componente: '+this.pelicula.length)
    this.totalAmmount = this._srvCarrito.obtenerPrecioTotal();

  }

  eliminarPeliculaDelCarrito(idPelicula:number) {
    this._srvCarrito.eliminarPeliculaDelCarrito(idPelicula);

  }

  vaciarCarrito() {
    this._srvCarrito.vaciarCarrito();
  }

}
