import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ClientesCadastroComponent } from "./components/clientes/clientes-cadastro/clientes-cadastro.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesListagemComponent } from "./components/clientes/clientes-listagem/clientes-listagem.component";
import { PaginaNaoEncontradaComponent } from "./components/pagina-nao-encontrada/pagina-nao-encontrada.component";
import { VeiculosComponent } from "./components/veiculos/veiculos.component";
import { VeiculosCadastroComponent } from "./components/veiculos/veiculos-cadastro/veiculos-cadastro.component";
import { VeiculosListagemComponent } from "./components/veiculos/veiculos-listagem/veiculos-listagem.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home" },
    {
        path: "clientes",
        component: ClientesComponent,
        title: "Clientes",
        children: [
            {
                path: "novo",
                component: ClientesCadastroComponent,
                title: "Clientes - Novo",
            },
            {
                path: "editar/:id",
                component: ClientesCadastroComponent,
                title: "Clientes - Editar",
            },
            {
                path: "lista",
                component: ClientesListagemComponent,
            },
            {
                path: "**",
                redirectTo: "lista",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "veiculos",
        component: VeiculosComponent,
        title: "Veículos",
        children: [
            {
                path: "novo",
                component: VeiculosCadastroComponent,
                title: "Veículos - Novo",
            },
            {
                path: "editar/:id",
                component: VeiculosCadastroComponent,
                title: "Veículos - Novo",
            },
            {
                path: "lista",
                component: VeiculosListagemComponent,
            },
            {
                path: "**",
                redirectTo: "lista",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "404",
        component: PaginaNaoEncontradaComponent,
    },
    {
        path: "**",
        redirectTo: "404",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
