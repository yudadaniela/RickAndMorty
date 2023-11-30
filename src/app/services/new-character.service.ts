import { Injectable } from '@angular/core';
import { Character } from '../interfaces/card-ricky';

@Injectable({
  providedIn: 'root'
})
export class NewCharacterService {
  private character:Character[]=[];


  getCharacter(){
   return this.character 
  }
  setCharacter(data:Character){
  //return this.character=data
  }
}
