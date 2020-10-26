import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit {

  constructor(
    private alert: AlertasService
  ) { }

  ngOnInit(): void {
  }


  resgatar(){
    this.alert.showAlertSuccess("Seu resgaste de pontos foi enviado para o seu email!")
    
  }

}
