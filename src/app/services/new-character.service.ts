import { Injectable } from '@angular/core';
import { Character, Result } from '../interfaces/card-ricky';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewCharacterService {
  private character:Result={
    id:       1000,
    name:     '',
    status:   '',
    gender:   '',
    image:    '',
   
  };


  getCharacter(){
   return this.character 
  }
  setCharacter(newCharacter:Result):Observable<Result>{
    this.character=newCharacter
    return of(this.character )
  }
}
