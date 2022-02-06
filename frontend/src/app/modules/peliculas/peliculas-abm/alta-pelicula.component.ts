import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _peliculaSvc: PeliculasService
  ) {}

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      this.isAddMode = !this.id;

      this.form = this.formBuilder.group({
          titulo: ['', Validators.required],
          nombreDirector: ['', Validators.required],
          nombreActor: ['', Validators.required],
          genero: ['', [Validators.required, Validators.email]],
          anio: ['', Validators.required],
          precio: ['', [Validators.minLength(1), this.isAddMode ? Validators.required : Validators.nullValidator]],
          imagen: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
      });

      if (!this.isAddMode) {
          this._peliculaSvc.getAllPeliculas()
              .subscribe(peliculas => peliculas.filter(unaPeli => unaPeli.id_movie == Number(this.id) ));
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
      this._peliculaSvc.agregarPelicula(this.form.value)
          .pipe(first())
          .subscribe(() => {
              this.router.navigate(['../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

  private updateUser() {
      this._peliculaSvc.actualizarPelicula( this.form.value)
          .pipe(first())
          .subscribe(() => {
              this.router.navigate(['../../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }



}


