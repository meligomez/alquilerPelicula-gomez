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
    private _srvCarrito: CarritoService,private _modalService: NgbModal, private _srvPelicula: CarritoService
  ) { }

  ngOnInit() {

    console.log('carrito componente: '+this.pelicula.length)
    this._srvPelicula.getAllPeliculasCarrito().subscribe((prueba:Pelicula[])=>
      {
        console.log('carrito componente 2'+prueba);
        this.obtenerPrecioTotal(prueba);
      }
    );

  }

  eliminarPeliculaDelCarrito(idPelicula:number) {
    this._srvCarrito.eliminarPeliculaDelCarrito(idPelicula).subscribe(
      (peliculas:Pelicula) => {
        console.log("Eliminar pelicula: "+peliculas)
      }
    );

  }

  vaciarCarrito(peliculas:Pelicula[]) {
    this._srvCarrito.vaciarCarrito(peliculas);
  }

  private obtenerPrecioTotal(peliculas:Pelicula[]):number {
    let total = 0;
     peliculas.
      map(
        (peli:Pelicula) =>{
          console.log(peli.precio)
          this.totalAmmount += peli.precio;
        }
      );
    // this.itemsCarrito.map(item => {
    //   total += item.precio;
    // });
    return this.totalAmmount;
  }
}
