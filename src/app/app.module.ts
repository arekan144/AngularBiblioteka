import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GazetyComponent } from './gazety/gazety.component';
import { LataComponent } from './lata/lata.component';
import { CzasopismoComponent } from './czasopismo/czasopismo.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaCzasopismComponent } from './lista-czasopism/lista-czasopism.component';
import { BrakstronyComponent } from './brakstrony/brakstrony.component';


@NgModule({
  declarations: [
    AppComponent,
    GazetyComponent,
    LataComponent,
    CzasopismoComponent,
    ListaCzasopismComponent,
    BrakstronyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
