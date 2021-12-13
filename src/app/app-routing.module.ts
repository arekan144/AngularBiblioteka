import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
// import { ListaCzasopismComponent } from './lista-czasopism/lista-czasopism.component';
import { GazetyComponent } from './gazety/gazety.component';
import { DostCzasopismaService } from './dost-czasopisma.service';
import { BrakstronyComponent } from './brakstrony/brakstrony.component';
import { ListaCzasopismComponent } from './lista-czasopism/lista-czasopism.component'
import { CzasopismoComponent } from './czasopismo/czasopismo.component';
import { EditComponent } from './edit/edit.component';
// import { AwaiterResolver } from './awaiter.resolver';

const routes: Routes = [
  { path: '', component: GazetyComponent },
  { path: 'edit', component: EditComponent },
  // { path: 'error404', component: BrakstronyComponent },
  // { path: ':gazeta/:rok', component: ListaCzasopismComponent, },
  { path: ':gazeta', component: ListaCzasopismComponent, children: [{ path: ':rok', component: CzasopismoComponent }] },
  { path: '**', component: GazetyComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  providers: [DostCzasopismaService],
})
export class AppRoutingModule { }
