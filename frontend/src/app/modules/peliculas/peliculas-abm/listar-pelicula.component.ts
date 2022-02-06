import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Pelicula } from '../peliculas-list/pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.css']
})
export class ListarPeliculaComponent implements OnInit {

  peliculas!: Pelicula[];

    constructor(private _peliculaSvc: PeliculasService) {}

    ngOnInit() {
        this._peliculaSvc.getAllPeliculas()
            .pipe(first())
            .subscribe(peliculas => this.peliculas = peliculas);
    }

    eliminarPelicula(id: number) {
        const pelicula = this.peliculas.find(x => x.id_movie === id);
        if (!pelicula) return;
      //  user.isDeleting = true;
        // this._peliculaSvc.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}
