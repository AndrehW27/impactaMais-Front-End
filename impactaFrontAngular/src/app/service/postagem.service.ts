import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }


  // impacta-mais.herokuapp.com


  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagem', this.token)
    // return this.http.get('https://impacta-mais.herokuapp.com/postagem', this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagem', postagem, this.token)
    // return this.http.post('https://impacta-mais.herokuapp.com/postagem', postagem, this.token)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/postagem', postagem, this.token)
    // return this.http.put('https://impacta-mais.herokuapp.com/postagem', postagem, this.token)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagem/${id}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/postagem/${id}`, this.token)

  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagem/${id}`, this.token)
    // return this.http.delete(`https://impacta-mais.herokuapp.com/postagem/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string) {
    return this.http.get(`http://localhost:8080/postagem/titulo/${titulo}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/postagem/titulo/${titulo}`, this.token)

  }

  getBySanguePostagem(sangue: string) {
    return this.http.get(`http://localhost:8080/postagem/sangue/${sangue}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/postagem/sangue/${sangue}`, this.token)

  }

  getByCidadePostagem(cidade: string) {
    return this.http.get(`http://localhost:8080/postagem/cidade/${cidade}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/postagem/cidade/${cidade}`, this.token)

  }

}












