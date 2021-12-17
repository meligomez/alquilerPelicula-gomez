import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userSinAcceso:boolean=false;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    user:('admin'),
    pass:('admin')
  });

  login(){

    const {user, pass} = this.loginForm.value;

    if(user =='admin' && pass =='admin'){
      localStorage.setItem('user',JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('peliculas')
    }else{
      this.userSinAcceso=true;
      return;
    }

  }
}
