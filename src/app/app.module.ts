import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PeliculasListComponent } from './peliculas/peliculas-list/peliculas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PeliculasListComponent,
    PeliculaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
