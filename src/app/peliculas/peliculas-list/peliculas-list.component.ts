import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from './pelicula';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  constructor(private _svcPelicula:PeliculasService) { }

  peliculas: Pelicula[] = [];

  ngOnInit(): void {
     this.buscarTodasLasPeliculas();
  }


  buscarTodasLasPeliculas():any{
    this._svcPelicula.getAllPeliculasJson()
    .subscribe( todasLasPeliculas =>
      {
        this.peliculas= todasLasPeliculas;
        console.log(this.peliculas)
      }
    );
  }
}
