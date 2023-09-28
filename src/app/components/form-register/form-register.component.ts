import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder){}
  ngOnInit(): void {

  }

  onSubmit(){
  }
}
