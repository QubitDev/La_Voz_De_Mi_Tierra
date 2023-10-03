import { Component, ViewChild, ElementRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AudioService } from './audio.service'

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  // public preview: String = '';
  public files: any = [];
  public audioForm!: FormGroup;
  formatFile: String = '';
  duracion: string = '';


  constructor(private sanitizer: DomSanitizer,private fb: FormBuilder, /*private audioService: AudioService*/) {
    this.audioForm = this.fb.group({
      Title: ['', Validators.required],
      Musica: ['', Validators.required],
      Procedencia: ['', Validators.required],
      formato: ['', Validators.required],
      tipo_audio: ['', Validators.required],
      narrador: ['', Validators.required],
      duracion: ['', Validators.required],
      inputMusica: [null,Validators.required],
      imputTxt: [null,Validators.required]
    })
  }
  ngOnInit(): void {
  }

  captureFile(event: any) {

    const capturedFile = event.target.files[0];
    //capturar la duracion del audio
    if (capturedFile) {
      this.getAudioDuration(capturedFile).then(duration => {
        this.duracion = duration;
      });
    }
    // this.extractBase64(capturedFile).then(image => {
    //   this.preview = image.base !== null ? image.base : '';
    //   console.log(image);
    // });
    this.files.push(capturedFile);
  }

  uploadFile(): any {
    try {
      const formData = new FormData();
      this.files.forEach((file: any) => {
        formData.append('files', file);
        console.log(file);
      });

      // this.rest.post(`http://localhost:3001/upload`, formData).subscribe(
      //   res => {
      //     console.log('Server response', res);
      //   }
      // )
    } catch (error) {
      console.log('error', error);
    }
  }

  reset() {
    this.audioForm.reset();
  }

  // private  verifyFile() {
  //   // Implementar la funcionalidad de verificación
  // }

  // uploadFile() {
  //   if (this.audioForm.valid) {
  //     this.audioService.uploadAudio(this.audioForm.value)
  //       .subscribe(
  //         () => {
  //           // Mostrar mensaje de éxito
  //           console.log('¡AUDIO CORRECTAMENTE SUBIDO!');
  //         },
  //         (error) => {
  //           // Manejar errores al subir el audio
  //           console.error('Error al subir el audio', error);
  //         }
  //       );
  //   } else {
  //     // Mostrar mensaje de error por datos faltantes
  //     console.error('ERROR FALTAN DATOS');
  //   }
  // }



// codigo aparate
  private extractBase64 = async ($event: any): Promise<{ base: string | null }> => {
    return new Promise(async (resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        let image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result as string
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      } catch (e) {
        resolve({
          base: null
        });
      }
    });
  }


  // Seleccion de formato
  updateAcceptAttribute(event: any) {
    const selectedFormat = event.target.value;

    switch (selectedFormat) {
      case 'MP3':
        this.formatFile = '.mp3';
        break;
      case 'WAV':
        this.formatFile = '.wav';
        break;
      case 'AIFF':
        this.formatFile = '.aiff' ;
        break;
    }
  }

  // obtencion de duracion de audio
  async getAudioDuration(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const audioElement = new Audio();
      audioElement.src = URL.createObjectURL(file);

      audioElement.addEventListener('loadedmetadata', () => {
        const durationInSeconds = audioElement.duration;
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = Math.floor(durationInSeconds % 60);

        const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        resolve(formattedDuration);
      });

      audioElement.addEventListener('error', (error) => {
        reject('Error al obtener la duración del archivo de audio.');
      });
    });
  }

  onSubmit(){
  }
}