import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GazetyComponent } from './gazety/gazety.component';
import { LataComponent } from './lata/lata.component';
import { CzasopismoComponent } from './czasopismo/czasopismo.component';

@NgModule({
  declarations: [
    AppComponent,
    GazetyComponent,
    LataComponent,
    CzasopismoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
