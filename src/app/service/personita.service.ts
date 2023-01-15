import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personita } from '../model/Personita.model';
@Injectable({
  providedIn: 'root'
})
export class PersonitaService {
  URL = 'https://portfoliojoel-backend.onrender.com/personovich/';
  //URL = 'https://localhost:8080/personovich';
  constructor(private httpClient: HttpClient){}

  public getPersona():Observable<Personita>{
    return this.httpClient.get<Personita>(this.URL +'traer/perfil');
  }
}
