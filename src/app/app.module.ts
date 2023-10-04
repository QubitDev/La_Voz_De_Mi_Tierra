import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ...

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../.history/src/app/material.module_20230927011750';
import { SharedModule } from './shared/shared.module';
// import { AngularFireModule } from '@angular/fire/compat';

// import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environments.prod';
<<<<<<< HEAD
import { VistaAdmComponent } from './vista-adm/vista-adm.component';
=======
// import { AngularFireStorage } from '@angular/fire/storage';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VistaAdmComponent
=======
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebase)
    
=======
  //   AngularFireModule.initializeApp(environment.firebase),
  //   // AngularFireModule.initializeApp(firebaseConfig), // Initialize AngularFire with your Firebase config
  //   AngularFireStorageModule
>>>>>>> main
  ],
  providers: [/*AngularFireStorage*/],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }


=======
export class AppModule {

}
>>>>>>> main
