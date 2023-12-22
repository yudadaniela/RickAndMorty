import {  AbstractControl, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
export class Validator extends Validators{
    
    //AbstractControl sirve como base para los controles de  formularios, conjunto de funcionalidades compartidas para trabajar con formularios
    
    static imageSizeValidator(control: AbstractControl): ValidatorFn {
    //   const image = control.value;
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
      debugger
      const image=control.value
      return image.size > 2 * 1024 * 1024?{ imageSize: true }:null
    }
}
}
