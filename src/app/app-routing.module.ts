import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListarComponent } from './paginas/listar/listar.component';

const routes: Routes = [  
  { path: '', redirectTo: 'paginas/formulario', pathMatch: 'full' },
{path:"paginas/formulario",component: FormularioComponent},
{path:"paginas/listar",component: ListarComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
