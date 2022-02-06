import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router,  private _svcAuth:AuthService) { }

  ngOnInit(): void {
  }

  registroForm: FormGroup = this.fb.group({
    nombre:(''),
    apellido:(''),
    user:(''),
    pass:('')
  });

  registrar(){
    const {nombre, apellido,user,pass} = this.registroForm.value;
    this._svcAuth.registrarUser(nombre,apellido,user,pass).subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }
}
