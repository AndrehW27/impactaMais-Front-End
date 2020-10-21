import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from '../model/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllHospitals(){
    return this.http.get('http://localhost:8080/hospitais', this.token)
    // return this.http.get('https://impacta-mais.herokuapp.com/hospitais', this.token)
  }

// impacta-mais.herokuapp.com


  getByIdHospital(id: number){
    return this.http.get(`http://localhost:8080/hospitais/${id}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/hospitais/${id}`, this.token)
  }

  postHospital(hospital: Hospital){
    return this.http.post('http://localhost:8080/hospitais', hospital, this.token)
    // return this.http.post('https://impacta-mais.herokuapp.com/hospitais', hospital, this.token)
  }

  putHospital(hospital: Hospital) {
    return this.http.put('http://localhost:8080/hospitais', hospital, this.token)
    // return this.http.put('https://impacta-mais.herokuapp.com/hospitais', hospital, this.token)
  }

  deleteHospital(id: number){
    return this.http.delete(`http://localhost:8080/hospitais/${id}`, this.token)
    // return this.http.delete(`https://impacta-mais.herokuapp.com/hospitais/${id}`, this.token)

  }

  
  getByCidadeHospital(cidade: string) {
    return this.http.get(`http://localhost:8080/hospitais/cidade/${cidade}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/hospitais/cidade/${cidade}`, this.token)

  }

  getByNomeHospital(nome: string) {
    return this.http.get(`http://localhost:8080/hospitais/nome/${nome}`, this.token)
    // return this.http.get(`https://impacta-mais.herokuapp.com/hospitais/nome/${nome}`, this.token)

  }

}

