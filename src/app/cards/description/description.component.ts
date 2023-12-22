import { Component, OnInit } from '@angular/core';
import { ApiRickyService } from 'src/app/services/api-ricky.service';
import { Character, Result } from '../../interfaces/card-ricky';
import { ActivatedRoute } from '@angular/router';
import { NewCharacterService } from 'src/app/services/new-character.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  public data: Result |undefined;
  
  constructor(
    private apiRickyMorty: ApiRickyService,
    private route: ActivatedRoute,
    private newcharacterservice:NewCharacterService
  ) {}
  ngOnInit(): void {
    this.getDescriptiCharacter()
  } 
  getDescriptiCharacter(){
    const id: number = Number(
      this.route.snapshot.paramMap.get('id')
    );
    if(id){
      if(id===1000){
        this.data=this.newcharacterservice.getCharacter()
        }else{
        this.apiRickyMorty.getDataId(id).subscribe((response) => {
          this.data = response;
          //console.log(this.data);
        });
      }
    }
  }
  
}
//manejo de recursos, pipe = take() liberacion   