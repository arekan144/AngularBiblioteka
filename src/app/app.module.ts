import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GazetyComponent } from './gazety/gazety.component';
import { LataComponent } from './lata/lata.component';
import { CzasopismoComponent } from './czasopismo/czasopismo.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaCzasopismComponent } from './lista-czasopism/lista-czasopism.component';

@NgModule({
  declarations: [
    AppComponent,
    GazetyComponent,
    LataComponent,
    CzasopismoComponent,

    ListaCzasopismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
