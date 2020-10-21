import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }


  // impacta-mais.herokuapp.com

  getAllTemas(){
    return this.http.get('http://localhost:8080/tema', this.token)
    // return this.http.get('https://impacta-mais.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number){
    return this.http.get(`http://localhost:8080/tema/${id}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema){
    return this.http.post('http://localhost:8080/tema', tema, this.token)
    // return this.http.post('https://impacta-mais.herokuapp.com/tema', tema, this.token)
  }

  getByNomeTema(nome: string){
    return this.http.get(`http://localhost:8080/tema/nome/${nome}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/tema/nome/${nome}`, this.token)
  }
  

}

