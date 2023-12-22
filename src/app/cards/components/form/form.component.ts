import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { NewCharacterService } from '../../../services/new-character.service';
import { Router } from "@angular/router";
import { Validator } from "../validator";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  maxSize: number = 2 * 1024 * 1024; //2Mb => 1024*1024 es la cantidad de bytes en un MB
  characterForm: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private newCharacterService: NewCharacterService,
    private router:Router
  ) {
    this.characterForm = this.fb.group({
      id:[1000],
      name: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      status: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      gender: ['', Validators.required],
      image: ['', Validators.required, Validator.imageSizeValidator],
    });
  }

  //AbstractControl sirve como base para los controles de  formularios, conjunto de funcionalidades compartidas para trabajar con formularios
  // imageSizeValidator(
  //   control: AbstractControl
  // ): { [key: string]: boolean } | null {
  //   const image = control.value;
  //    //se refiere al valor actual del control de formulario, al llamar control.value
  //   //estamos accediendo al valor actual del control(el input)
  //   if (image) {
  //     if (image.size > this.maxSize) {
  //       return { imageSize: true };
  //     }
  //   }
  //   return null;
  // }
  onSubmit() {
    //console.log(this.characterForm.value);
    
    const formData=this.characterForm.value
    this.newCharacterService.setCharacter(formData).subscribe((data)=>{
      console.log(data);
      
      this.router.navigate(['/description/1000'])
    })
   
   
  }
}
