import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PeliculasListComponent } from './modules/peliculas/peliculas-list/peliculas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaDetalleComponent } from './modules/peliculas/pelicula-detalle/pelicula-detalle.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './shared/header/header.component';
import { CoomingSoonComponent } from './shared/cooming-soon/cooming-soon.component';
import { CarritoComponent } from './modules/carrito/carrito.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PeliculasListComponent,
    PeliculaDetalleComponent,
    FooterComponent,
    HeaderComponent,
    CoomingSoonComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
