import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar-sangue',
  templateUrl: './navbar-sangue.component.html',
  styleUrls: ['./navbar-sangue.component.css']
})
export class NavbarSangueComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  sair() {
    this.router.navigate(['/home'])
    localStorage.clear()
  }

}
