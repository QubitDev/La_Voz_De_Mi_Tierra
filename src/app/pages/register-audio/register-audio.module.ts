import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAudioRoutingModule } from './register-audio-routing.module';
import { RegisterAudioComponent } from './register-audio.component';

import { FormRegisterComponent } from "./../../components/form-register/form-register.component"


@NgModule({
  declarations: [
    RegisterAudioComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterAudioRoutingModule
  ]
})
export class RegisterAudioModule { }
