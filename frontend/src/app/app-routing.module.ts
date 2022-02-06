import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { PeliculasListComponent } from './modules/peliculas/peliculas-list/peliculas-list.component';
import { LoginComponent } from './auth/login/login.component';
import { PeliculaDetalleComponent } from './modules/peliculas/pelicula-detalle/pelicula-detalle.component';
import { CoomingSoonComponent } from './shared/cooming-soon/cooming-soon.component';
import { AuthGuarder } from './auth/auth-guard';
import { ListarPeliculaComponent } from './modules/peliculas/peliculas-abm/listar-pelicula.component';
import { AltaPeliculaComponent } from './modules/peliculas/peliculas-abm/alta-pelicula.component';

const routes: Routes = [
  {
    path: 'login',
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
  },
  {
    path: 'not-found',
    canLoad: [AuthGuarder],
    component: CoomingSoonComponent
  },
  {
    path: '',
    redirectTo: 'login',pathMatch:'full'
  },
  {
    path: 'not-found/:parametro',
    canActivate: [AuthGuarder],
    component: CoomingSoonComponent
  },
  {
    path: 'admin-peliculas',
    component: ListarPeliculaComponent
  },
  {
    path: 'agregar-pelicula',
    component: AltaPeliculaComponent
  },
  {
    path: 'admin-peliculas/editar/:id',
    component: AltaPeliculaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
