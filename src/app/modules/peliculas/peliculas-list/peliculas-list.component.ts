import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from './pelicula';
import { PeliculaDetalleComponent } from '../pelicula-detalle/pelicula-detalle.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from '../../carrito/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  constructor(private _svcPelicula:PeliculasService,private _modalService: NgbModal,private _srvCarrito: CarritoService) { }


  peliculas: Pelicula[] = [];
 // @Input() pelis: Pelicula[] = [];
  private peliculaSeleccionada!: Pelicula[];
  $peliculasSubs!:Subscription;

  ngOnInit(): void {
    this.buscarTodasLasPeliculas();
  }


  ngOnDestroy(): void {
    this.$peliculasSubs.unsubscribe();
  }

  buscarTodasLasPeliculas():any{
    this.$peliculasSubs = this._svcPelicula.getAllPeliculas()
    .subscribe( todasLasPeliculas =>
      {
        this.peliculas= todasLasPeliculas;
      }
    );
  }

  abrirDetallePelicula(pelicula:Pelicula) {
    const modalRef = this._modalService.open(PeliculaDetalleComponent);
    modalRef.componentInstance.pelicula = pelicula;

   }

  // Agregar el producto al carrito
  // ===============================

  agregarAlCarrito(event:any, peliculaId:number) {

    this.peliculaSeleccionada = this.peliculas.filter((pelicula: { id_movie: number; }) => {
      return pelicula.id_movie === peliculaId;
    });

    this._srvCarrito.agregarPeliculaACarrito(this.peliculaSeleccionada[0]).subscribe(
      (rta:any)=>{
        console.log(rta);
      }
    );
  }
}
