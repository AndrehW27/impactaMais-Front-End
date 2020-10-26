import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // showPassword;

  // hide = true;

  userLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
  }





  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      this.router.navigate(['/feed']) 
    }, err => {
      if (err.status == '500' || err.status == '400'  || err.status == '402' ){
        this.alert.showAlertDanger("E-mail e/ou senha incorretos.")
      }

    })
  }




  entrarEnter(event:any){
    if(event.keyCode === 13)
      {this.entrar();}
    }
  


}
