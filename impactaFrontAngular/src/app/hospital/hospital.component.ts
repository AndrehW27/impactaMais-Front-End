import { Component, OnInit } from '@angular/core';
import { Hospital } from '../model/hospital';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../service/hospital.service';
import { AlertasService } from '../service/alertas.service';
import { getAllStates, getAllCities, getStateCities } from "easy-location-br";


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  estados = []
  estadoSelecao: string
  cidades = []

 

  hospital: Hospital = new Hospital()
  listaHospitais: Hospital[]
  cidade: string
  nome: string

  constructor(
    private hospitalService: HospitalService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllHospitals()

    this.estados = getAllStates()
  }

  findAllHospitals() {
    this.hospitalService.getAllHospitals().subscribe((resp: Hospital[]) => {
      this.listaHospitais = resp
    })
  }

  findAllHospitalsBotao() {
    this.hospitalService.getAllHospitals().subscribe((resp: Hospital[]) => {
      this.listaHospitais = resp
      window.scroll(0, 450)
    })
  }

  findByIdHospital() {
    this.hospitalService.getByIdHospital(this.hospital.id).subscribe((resp: Hospital) => {
      this.hospital = resp
    })
  }

  cadastrar() {
    if (this.hospital.nome == null || this.hospital.cidade == null || this.hospital.endereco == null || this.hospital.link == null) {
      this.alert.showAlertDanger('Preencha o campo de nome do hospital corretamente.')
    }
    else {
      this.hospitalService.postHospital(this.hospital).subscribe((resp: Hospital) => {
        this.hospital = resp
        this.hospital = new Hospital()
        this.alert.showAlertInfo('Hospital adicionado para análise!')
        this.findAllHospitals()
        window.scroll(0, 825)
      })
    }
  }

  findByCidadeHospital(){
    if (this.cidade === '') {
      this.findAllHospitals()   
      this.alert.showAlertInfo('Cidade não encontrada, veja a lista de todos os hospitais') 
      window.scroll(0, 900)    
    } else {
      this.hospitalService.getByCidadeHospital(this.cidade).subscribe((resp: Hospital[]) => {
        this.listaHospitais = resp
        window.scroll(0, 900)
      })
    }  
  }

  findByNomeHospital(){
    if (this.nome === '') {
      this.findAllHospitals() 
      this.alert.showAlertInfo('Hospital não encontrado, veja a lista de todos os hospitais') 
      window.scroll(0, 900)   
    } else {
      this.hospitalService.getByNomeHospital(this.nome).subscribe((resp: Hospital[]) => {
        this.listaHospitais = resp
        window.scroll(0, 900)
      })
    }  
  }




  estadoSelecionado(event:any) {
    this.estadoSelecao=event.target.value
    this.cidades = getStateCities(this.estadoSelecao)
  }



}
