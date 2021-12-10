import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { PeliculasListComponent } from './peliculas/peliculas-list/peliculas-list.component';
import { LoginComponent } from './auth/login/login.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'peliculas',
    component: PeliculasListComponent
  },
  {
    path: 'detalle',
    component: PeliculaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
