import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LojaProdutoComponent } from './produto/loja-produto/loja-produto.component';

const routes: Routes = [
  {path:'login-admin', component: LoginAdminComponent},
  {path:'loja-produtos', component: LojaProdutoComponent},
  // TODO - remover a linha seguinte depois que terminar essa task
  {path:'**', redirectTo:'loja-produtos'}
  //{path:'**', redirectTo:'login-admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
