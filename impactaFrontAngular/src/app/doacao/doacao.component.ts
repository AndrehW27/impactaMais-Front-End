import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { PostagemService } from '../service/postagem.service';
import { AlertasService } from '../service/alertas.service';
import { getAllStates, getAllCities, getStateCities } from "easy-location-br";

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  estados = []
  estadoSelecao: string
  cidades = []

  key = 'data_post'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  sangue: string
  cidade: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllPostagens()
    this.findAllTemas()

    this.estados = getAllStates()
  }


  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findAllPostagens2() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
      window.scroll(0, 600)
    })
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findBySanguePostagem(){
    if (this.sangue === '') {
      this.findAllPostagens()      
    } else {
      this.postagemService.getBySanguePostagem(this.sangue).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
        window.scroll(0, 800)
      })
    }  
  }

  findByCidadePostagem(){
    if (this.cidade === '') {
      this.findAllPostagens()      
    } else {
      this.postagemService.getByCidadePostagem(this.cidade).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
        window.scroll(0, 900)
      })
    }  
  }

  estadoSelecionado(event:any) {
    this.estadoSelecao=event.target.value
    this.cidades = getStateCities(this.estadoSelecao)
  }

  // findBySangueECidade(){
  //   if (this.sangue === '' && this.cidade === '') {
  //     this.findAllPostagens()
  //     this.alert.showAlertDanger("Preencha todos os campos corretamente")      
  //   } else {
  //     this.postagemService.getByCidadePostagem(this.cidade).subscribe((resp: Postagem[]) => {
  //       this.listaPostagens = resp
  //     })
  //   }  
  // }
  

}
