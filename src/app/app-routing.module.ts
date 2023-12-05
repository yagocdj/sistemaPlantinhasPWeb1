import { Pedido } from 'src/app/shared/model/pedido';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LojaProdutoComponent } from './produto/loja-produto/loja-produto.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './cliente/listagem-cliente/listagem-cliente.component';
import { CarrinhoComponent } from './pedido/carrinho/carrinho.component';
import { AdminMenuComponent } from './layout/admin-menu/admin-menu.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';
import { ListagemPedidoComponent } from './pedido/listagem-pedido/listagem-pedido.component';

const routes: Routes = [
  {
    path:'login-admin',
    component: LoginAdminComponent
  },
  {
    path:'loja-produtos',
    component: LojaProdutoComponent
  },
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent
  },
  {
    path: 'listagem-cliente',
    component: ListagemClienteComponent
  },
  {
    path:'admin-menu',
    component: AdminMenuComponent
  },
  {
    path:'listagem-produto',
    component: ListagemProdutoComponent
  },
  {
    path:'listagem-pedido',
    component: ListagemPedidoComponent
  },
  {
    path:'**',
    redirectTo:'loja-produtos'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
