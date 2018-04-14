import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMYUDh5EDi_MMUyagSjPput-7jX7-wUU4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
