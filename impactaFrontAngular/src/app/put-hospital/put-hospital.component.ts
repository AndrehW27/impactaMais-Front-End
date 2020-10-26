import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../model/hospital';
import { AlertasService } from '../service/alertas.service';
import { HospitalService } from '../service/hospital.service';
import { getAllStates, getAllCities, getStateCities } from "easy-location-br";


@Component({
  selector: 'app-put-hospital',
  templateUrl: './put-hospital.component.html',
  styleUrls: ['./put-hospital.component.css']
})
export class PutHospitalComponent implements OnInit {

  estados = []
  estadoSelecao: string
  cidades = []


  hospital: Hospital = new Hospital()
  listaHospitais: Hospital[]
  idHospital: number
  cidade: string

  constructor(
    private hospitalService: HospitalService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params["id"]
    this.findByIdHospital(id)
    window.scroll(0,0)

    this.estados = getAllStates()
  }

  salvar() {
    this.hospitalService.putHospital(this.hospital).subscribe((resp: Hospital) => {
      this.hospital = resp
      this.router.navigate(['/hospital'])
      this.alert.showAlertSuccess('Hospital alterado com sucesso!')
    })

  }

  findByIdHospital(id: number) {
    this.hospitalService.getByIdHospital(id).subscribe((resp: Hospital) => {
      this.hospital = resp})
  }

  btnCancelar(){
    this.router.navigate(['/hospital'])
  }





  estadoSelecionado(event:any) {
    this.estadoSelecao=event.target.value
    this.cidades = getStateCities(this.estadoSelecao)
  }


  
}
