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
import { formatDate } from '@angular/common';

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
      image: [null, [Validators.required], [Validator.imageSizeValidator]],
    });
  }
  imageUpLoad(event:any):void{
    //usando los valores del navegador, event.target pendiente del Dom,  
    const file:File | null =((event.target as HTMLInputElement).files?.[0]) || null;
    //-----transformacion de ficheros a dato binario ----------------------
    // const reading:FileReader= new FileReader
    // reading.onload=()=>{
    //   // array buffer ES UN OBJETO DE JS QUE REPRESENTA UN BUFFER DE MEMORIA 
    //   //memoria temporal que se abre para contener datos 
    //   const binaryData:ArrayBuffer | string |null= reading.result;
    //   this.characterForm.get('image')?.setValue(binaryData);
    // }
    
    // reading.readAsArrayBuffer(file)

    if (file){
      this.characterForm.patchValue({image:File})
      this.characterForm.get('image')?.updateValueAndValidity();
    }



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
   const imageControl=this.characterForm.get('image')
   if (imageControl && imageControl.value){
     const formData= new FormData();
     formData.append('image',imageControl.value)
   }
  }
}
