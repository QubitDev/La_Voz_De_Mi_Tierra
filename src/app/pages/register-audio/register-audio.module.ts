import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAudioRoutingModule } from './register-audio-routing.module';
import { RegisterAudioComponent } from './register-audio.component';

import { FormRegisterComponent } from "./../../components/form-register/form-register.component"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from 'src/app/components/buttons/buttons.component';



@NgModule({
  declarations: [
    RegisterAudioComponent,
    FormRegisterComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RegisterAudioRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterAudioModule { }
