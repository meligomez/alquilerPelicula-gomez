import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  registroForm: FormGroup = this.fb.group({
    nombre:(''),
    apellido:(''),
    user:(''),
    pass:(''),
    repetirPass:('')
  });

  registrar(){

  }
}
