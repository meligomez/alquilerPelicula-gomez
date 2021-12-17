import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CarritoComponent } from 'src/app/modules/carrito/carrito.component';
import { CarritoService } from 'src/app/modules/carrito/carrito.service';
import { Pelicula } from 'src/app/modules/peliculas/peliculas-list/pelicula';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  public cartProductCount: number = 0;
  peliculas!:Pelicula[];
  $peliculaSubs!: Subscription;


  constructor(private _srvCarrito: CarritoService,private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.$peliculaSubs= this._srvCarrito.getPeliculas().subscribe(data => {
      this.cartProductCount = data.length;
      this.peliculas =data;
    });

  }

  ngOnDestroy(): void {
    this.$peliculaSubs.unsubscribe();
  }

  abrirCarrito(){
    const modalRef = this._modalService.open(CarritoComponent);
    console.log('abrirCarrito :'+this.peliculas[0]);
    modalRef.componentInstance.pelicula = this.peliculas;

  }

  getUserActual(){
    const userActual = localStorage.getItem('user') || '';
    return JSON.parse(userActual).user;
  }
}
