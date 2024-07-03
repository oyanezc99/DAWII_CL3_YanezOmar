import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPlanetasService {
  private apiUrl = "https://rickandmortyapi.com/api/location"

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any>{
    return this.http.get(`${this.apiUrl}?type-planet`)
  }
}
