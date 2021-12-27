import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CarritoComponent } from 'src/app/modules/carrito/carrito.component';
import { CarritoService } from 'src/app/modules/carrito/carrito.service';
import { Pelicula } from 'src/app/modules/peliculas/peliculas-list/pelicula';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  public cartProductCount: number = 0;
  peliculas!:Pelicula[];
  $peliculaSubs!: Subscription;
  esAdmin:boolean=false;
  username:string='';

  constructor(private _srvCarrito: CarritoService,private _modalService: NgbModal, private _srvAuth:AuthService) { }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.$peliculaSubs?.unsubscribe();
  }

  abrirCarrito(){
    this.$peliculaSubs= this._srvCarrito.getPeliculas().subscribe(data => {
      this.cartProductCount = data.length;
      this.peliculas =data;
      const modalRef = this._modalService.open(CarritoComponent);
      console.log('abrirCarrito :'+this.peliculas[0]);
      modalRef.componentInstance.pelicula = this.peliculas;
    });


  }

  cargarUsuario(){
    let user= this._srvAuth.getUserActual();
    if(user!=null){
      this.username=user.username;
      this.esAdmin=user.esAdmin;
    }

  }

}
