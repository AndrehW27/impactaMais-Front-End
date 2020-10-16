import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { PostagemService } from '../service/postagem.service';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key= 'date'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string
  sangue: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    
    this.findAllPostagens()
    this.findAllTemas()
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    }, err => {
      if (err.status == '500' || err.status == '400'  || err.status == '402' ){
        this.alert.showAlertDanger("Preencha todos os campos corretamente para prosseguir!")
      }

    })
  }

  publicar() {

    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.text_box == null || this.postagem.tema == null) {
      this.alert.showAlertWarning('Preencha todos os campos')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        
        this.postagem = resp
        this.postagem = new Postagem()
        this.alert.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
        window.scroll(0, 725)
      })
    }
  }

  // TESTE


  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    }, err => {
      if (err.status == '500' || err.status == '400'  || err.status == '402' ){
        this.alert.showAlertDanger("Preencha todos os campos corretamente para prosseguir!")
      }

    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findByTituloPostagem(){
    if (this.titulo === '') {
      this.findAllPostagens()      
    } else {
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }  
  }


  findByNomeTema(){
    if (this.nomeTema === '') {
      this.findAllTemas()      
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }  
  }


  findBySanguePostagem(){
    if (this.sangue === '') {
      this.findAllPostagens()      
    } else {
      this.postagemService.getBySanguePostagem(this.sangue).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }  
  }



}
