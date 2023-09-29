import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  
  onAudioFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const audioFile = inputElement.files?.[0];
  
    if (audioFile) {
      // Aquí puedes realizar acciones con el archivo de audio, como cargarlo o mostrar información
      console.log('Archivo de audio seleccionado:', audioFile.name);
      // Puedes acceder a otras propiedades del archivo, como audioFile.type, audioFile.size, etc.
    }
  }

  onTextFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0]; // Obtener el primer archivo seleccionado
  
    if (file) {
      // Aquí puedes realizar acciones con el archivo, como cargarlo o mostrar información
      console.log('Archivo seleccionado:', file.name);
      // Puedes acceder a otras propiedades del archivo, como file.type, file.size, etc.
    }
  }
  




  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder){}
  ngOnInit(): void {

  }

  onSubmit(){
  }
}
