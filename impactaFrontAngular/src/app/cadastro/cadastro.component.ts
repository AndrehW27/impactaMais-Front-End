import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  // hide = true;

  usuario: Usuario = new Usuario();
  senha: string;
  // email: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {

    // this.validaEmail()
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if ( this.senha === this.usuario.senha) {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    } else {
      this.alert.showAlertDanger('As senhas não conferem')
    }
  }


// validaEmail(){
//   // let txtEmail = (<HTMLSelectElement>document.getElementById('txtEmail')).value;

//   if (this.email.indexOf('@') == -1){
        
//     let txtEmail = document.getElementById("txtEmail");

//     txtEmail.textContent = 'ola'


//   }
// }


entrarEnter(event:any){
  if(event.keyCode === 13)
    {this.cadastrar();}
  }

// teste(){

// let txt = document.querySelector('#txtEmail')



// }



}