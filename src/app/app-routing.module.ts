import { FormEditComponent } from './form-edit/form-edit.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
 
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'lista', component: ListaComponent},
  {path:'form-edit/:id', component: FormEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
