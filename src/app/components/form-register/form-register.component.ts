import { Component, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public preview: String = '';
  public files: any = [];
  
  constructor(private sanitizer: DomSanitizer,private readonly fb: FormBuilder){}
  
  captureFile(event: any) {
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then(image => {
      this.preview = image.base !== null ? image.base : '';
      console.log(image);
    });
    this.files.push(capturedFile);
    // console.log(event.target.files)
  }
  
  extractBase64 = async ($event: any): Promise<{ base: string | null }> => {
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
  

  






  // openFileInput() {
    //   const fileInput = document.getElementById('audioFile');
  //   if (fileInput) {
  //     fileInput.click();
  //   }
  // }

  // onAudioFileSelected(event: any) {
  //   const selectedFile = event.target.files[0];
  
  //   if (selectedFile) {
    //     const fileReader = new FileReader();

    //     fileReader.onload = (e) => {
      //       const filePreview = document.getElementById('file-preview');
      //       if (filePreview) {
        //         filePreview.innerHTML = ''; // Limpia cualquier vista previa anterior
        
        //         const audio = document.createElement('audio');
        //         audio.controls = true;
        //         audio.src = e.target?.result as string;
        //         filePreview.appendChild(audio);
        //       }
        //     };

  //     fileReader.readAsDataURL(selectedFile);
  //   }
  // }
  
  // @ViewChild('textInput') textInput!: ElementRef<HTMLInputElement>;
  // selectedFileIcon: string | undefined = '';
  // iconPreviewDisplay: string = 'none';

  // openFileSelector() {
  //   this.textInput.nativeElement.click();
  // }

  // onFileSelected(event: any) {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
  //     const iconMappings: { [key: string]: string } = {
  //       txt: './src/assets/icons/icon_txt.png',
  //       doc: './src/assets/icons/doc.png',
  //       default: './src/assets/icons/docs.png'
  //     };
  //     this.selectedFileIcon = iconMappings[fileExtension] || iconMappings['default'];
  //     this.iconPreviewDisplay = 'block';
  //   } else {
  //     this.iconPreviewDisplay = 'none';
  //   }
  // }

  //metodos para la funcionalida de agregar text

  // selectedFileIcon: string | undefined;
  // // textFilePreview: string = ''; // Variable para almacenar la vista previa del archivo de texto

  // openFileSelector() {
  //   const fileInput = document.getElementById('textFile') as HTMLInputElement;
  //   fileInput.click();
  // }

  // onFileSelected(event: any): void {
  //   const fileInput = event.target;
  //   const selectedFile = fileInput.files[0];

  //   if (selectedFile) {
  //     this.setSelectedFileIcon(selectedFile);
  //     // this.previewTextFile(selectedFile);
  //   } else {
  //     this.selectedFileIcon = undefined;
  //   }
  // }

  // private setSelectedFileIcon(selectedFile: File): void {
  //   const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
  
  //   if (fileExtension !== undefined) {
  //     const iconMappings: { [key: string]: string } = {
  //       txt: './src/assets/icons/icon_txt.png',
  //       doc: './src/assets/icons/doc.png', 
  //       default: './src/assets/icons/docs.png'
  //     };
  
  //     this.selectedFileIcon = iconMappings[fileExtension] || iconMappings['default'];
  //   }
  // }
  

  // private previewTextFile(selectedFile: File): void {
  //   const fileReader = new FileReader();

  //   fileReader.onload = (e) => {
  //     const filePreview = document.getElementById('text-file-preview');
  //     if (filePreview) {
  //       filePreview.innerHTML = ''; 

  //       const textPreview = document.createElement('pre');
  //       textPreview.textContent = e.target?.result as string;
  //       filePreview.appendChild(textPreview);
  //     }
  //   };

  //   fileReader.readAsText(selectedFile);
  // }







  contactForm!: FormGroup;

  // constructor(private readonly fb: FormBuilder){}
  ngOnInit(): void {

  }

  onSubmit(){
  }
}
