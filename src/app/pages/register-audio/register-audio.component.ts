import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegisterAudioComponent } from "./../../components/register-audio/register-audio.component"

@Component({
  selector: 'app-register-audio',
  templateUrl: './register-audio.component.html',
  styleUrls: ['./register-audio.component.css']
})
export class RegisterAudioComponent {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder){}
  ngOnInit(): void {

  }

  onSubmit(){
  }
}
