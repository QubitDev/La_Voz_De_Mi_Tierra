import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAudioRoutingModule } from './register-audio-routing.module';
import { RegisterAudioComponent } from './register-audio.component';

import { HeaderComponent } from "./../../components/header/header.component";
import { AsideComponent } from "./../../components/aside/aside.component";
import { FormRegisterComponent } from "./../../components/form-register/form-register.component"





@NgModule({
  declarations: [
    RegisterAudioComponent,
    HeaderComponent,
    AsideComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterAudioRoutingModule
  ]
})
export class RegisterAudioModule { }
