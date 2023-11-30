import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Result, RickAndMorty } from '../interfaces/card-ricky';

@Injectable({
  providedIn: 'root'
})
export class ApiRickyService {
 private apiUrl="https://rickandmortyapi.com/api/character"
  
 constructor(private http:HttpClient) { }

  getData(page:number):Observable<RickAndMorty>{
    return this.http.get<RickAndMorty>(`${this.apiUrl}/?page=${page}`)
    
  
  }
 getDataId(id:number):Observable<Result>{
  return this.http.get<Result>(`${this.apiUrl}/${id}`)
 }
}
