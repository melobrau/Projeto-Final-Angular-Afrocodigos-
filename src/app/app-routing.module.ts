import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaColaboradoresComponent } from './lista-colaboradores/lista-colaboradores.component';
import { FormularioColaboradorComponent } from './formulario-colaborador/formulario-colaborador.component';

const routes: Routes = [
  { path: 'colaboradores', component: ListaColaboradoresComponent },
  { path: 'adicionar', component: FormularioColaboradorComponent },
  { path: 'editar/:id', component: FormularioColaboradorComponent },
  { path: '', redirectTo: '/colaboradores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
