import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Output() customUpload = new EventEmitter<any[]>();
  @Output() customReset = new EventEmitter<void>();

  public files: any = [];
  public audioForm!: FormGroup;

  uploadFile(): any {
    try {
      const formData = new FormData();
      this.files.forEach((file: any) => {
        formData.append('files', file);
        console.log(file);
      });

      // Emitir el evento personalizado para cargar archivos en el componente padre
      this.customUpload.emit(this.files);
    } catch (error) {
      console.log('error', error);
    }
  }

  reset() {
    // Emitir el evento personalizado para reiniciar el formulario en el componente padre
    this.customReset.emit();
  }


}

