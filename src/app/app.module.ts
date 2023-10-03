import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { VistaAdmComponent } from './vista-adm/vista-adm.component';
=======
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environments.prod';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    VistaAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
