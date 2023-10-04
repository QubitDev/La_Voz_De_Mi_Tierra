import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ...

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
// import { AngularFireModule } from '@angular/fire/compat';

// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { environment } from 'src/environments/environments.prod';
import { VistaAdmComponent } from './vista-adm/vista-adm.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaAdmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
    // AngularFireModule.initializeApp(environment.firebase)

  //   AngularFireModule.initializeApp(environment.firebase),
  //   // AngularFireModule.initializeApp(firebaseConfig), // Initialize AngularFire with your Firebase config
  //   AngularFireStorageModule

  ],
  providers: [/*AngularFireStorage*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
