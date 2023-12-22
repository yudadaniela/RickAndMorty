import {  AbstractControl, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
export class Validator extends Validators{
    
    //AbstractControl sirve como base para los controles de  formularios, conjunto de funcionalidades compartidas para trabajar con formularios
    //ValidatorFn es un tipo en Angular que representa una función que toma un control de formulario (AbstractControl) como argumento y devuelve un objeto de errores de validación (ValidationErrors) o null si no hay errores. 
    static imageSizeValidator(control: AbstractControl): ValidatorFn {
    
        const image = control.value as File;
    //    //se refiere al valor actual del control de formulario, al llamar control.value
    //   //estamos accediendo al valor actual del control(el input)
    //   if (image) {
    //     if (image.size > 2 * 1024 * 1024) {
    //       return { imageSize: true };
    //     }
    //   }
    //   return null;
    // }  
    return(control:AbstractControl):ValidationErrors|null=>{
      //return image.size > 2 * 1024 * 1024?{ imageSize: true }:null
      return image && image.size > 2 * 1024 * 1024?{imageSizeValidator:true}:null;
    }
}
}
