import { Component, ViewChild, ElementRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public files: any = [];
  public audioForm!: FormGroup;

  formatFile: String = '';
  duracion: string = '';
  selectedTipo: string ='';

  constructor(private sanitizer: DomSanitizer,private fb: FormBuilder, /*private storage: AngularFireStorage*/) {
    this.audioForm = this.fb.group({
      Title: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9\s]+$')
        ]
      ],
      Musica: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(500),
          Validators.pattern('^[a-zA-Z\s]+$')
        ]
      ],
      Procedencia: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z\s]+$')
        ]
      ],
      formato: ['----', Validators.required],
      Tipo: ['', Validators.required],
      narrador: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z\s]+$')
        ]
      ],
      duracion: ['', Validators.required],
      inputMusica: [null,Validators.required],
      inputTxt: [null,Validators.required]
    })
  }
  ngOnInit(): void {
  }

  captureFile(event: any, audioForm:FormGroup) {

    const tipoAudioElement = audioForm.get('tipo_audio');

  if (tipoAudioElement !== null && tipoAudioElement !== undefined) {
    this.selectedTipo = tipoAudioElement.value;
  } else {
    this.selectedTipo = '';
  }
    const capturedFile = event.target.files[0];
    const formData = audioForm.value;

    this.files.push(capturedFile, formData);
  }

  captureAudio(event: any) {
    const capturedFile = event.target.files[0];
    //capturar la duracion del audio
    if (capturedFile) {
      this.getAudioDuration(capturedFile).then(duration => {
        this.duracion = duration;
      });
    }
    this.files.push(capturedFile);
  }

  // uploadFile() {
  //   if (this.files.length === 0) {
  //     console.log('No files to upload');
  //     return;
  //   }

  //   const file = this.files[0]; // Assuming you are uploading one file at a time
  //   const filePath = `audio/${new Date().getTime()}_${file.name}`;
  //   const fileRef = this.storage.ref(filePath);

  //   const uploadTask = this.storage.upload(filePath, file);

  //   // Track the upload progress
  //   uploadTask.percentageChanges().subscribe((percentage) => {
  //     console.log(`Uploading: ${percentage}%`);
  //   });

  //   // Get notified when the upload is complete
  //   uploadTask
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         fileRef.getDownloadURL().subscribe((downloadURL) => {
  //           console.log('File is uploaded!', downloadURL);
  //           // Now, you can save the downloadURL to your Firebase Realtime Database or perform any other actions you need.
  //         });
  //       })
  //     )
  //     .subscribe();
  // }


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

  // uploadFile() {
  //   if (this.audioForm.valid) {
  //     this.audioService.uploadAudio(this.audioForm.value)
  //       .subscribe(
  //         () => {
  //           // Mostrar mensaje de éxito
  //           alert('¡AUDIO CORRECTAMENTE SUBIDO!');
  //         },
  //         (error) => {
  //           alert('Error al subir el audio', error);
  //         }
  //       );
  //   } else {
  //     alert('ERROR FALTAN DATOS');
  //   }
  // }


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
