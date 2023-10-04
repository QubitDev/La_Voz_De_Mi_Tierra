import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAudioComponent } from './register-audio.component';

const routes: Routes = [
  { path: '', component: RegisterAudioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAudioRoutingModule { }
