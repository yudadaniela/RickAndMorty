import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  characterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.characterForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      state: ['',Validators.compose([Validators.required, Validators.maxLength(100)])],
      gender: ['',Validators.required,],
      image: ['', Validators.required,],
    });
  }
  imageSizeValidator(maxSize:number){
   
  }
}
