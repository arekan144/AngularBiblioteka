import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GazetyComponent } from './gazety/gazety.component';
import { LataComponent } from './lata/lata.component';
import { CzasopismoComponent } from './czasopismo/czasopismo.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaCzasopismComponent } from './lista-czasopism/lista-czasopism.component';
import { BrakstronyComponent } from './brakstrony/brakstrony.component';
import { MaterialModuleModule } from './material-module.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GazetyComponent,
    LataComponent,
    CzasopismoComponent,
    ListaCzasopismComponent,
    BrakstronyComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
