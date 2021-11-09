import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ListaCzasopismComponent } from './lista-czasopism/lista-czasopism.component';
import { GazetyComponent } from './gazety/gazety.component';

const routes: Routes = [
  { path: '', component: GazetyComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
