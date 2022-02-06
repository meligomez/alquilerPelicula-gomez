import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userSinAcceso:boolean=false;
  constructor(private fb:FormBuilder, private router:Router, private _svcLogin:AuthService) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    user:('admin'),
    pass:('admin')
  });

  login(){

     const {user, pass} = this.loginForm.value;

     this._svcLogin.getUsers(user,pass).subscribe(
      (usuarios: Usuario[]) => {
        console.table(usuarios)
        const userConMismoUserYPsw= usuarios.filter( user2 => user2.username === user && user2.password===pass);
        if(userConMismoUserYPsw.length>0){
          localStorage.setItem('user',JSON.stringify(userConMismoUserYPsw[0]));
          this.router.navigateByUrl('peliculas')
        }else{
          this.userSinAcceso=true;
          return;
        }
      }
    );


  }
}
