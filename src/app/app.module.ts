import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ClientesCadastroComponent } from "./components/clientes/clientes-cadastro/clientes-cadastro.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesListagemComponent } from "./components/clientes/clientes-listagem/clientes-listagem.component";
import { PaginaNaoEncontradaComponent } from "./components/pagina-nao-encontrada/pagina-nao-encontrada.component";
import { VeiculosComponent } from "./components/veiculos/veiculos.component";
import { VeiculosCadastroComponent } from "./components/veiculos/veiculos-cadastro/veiculos-cadastro.component";
import { VeiculosListagemComponent } from "./components/veiculos/veiculos-listagem/veiculos-listagem.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ClientesComponent,
        ClientesCadastroComponent,
        HomeComponent,
        ClientesListagemComponent,
        PaginaNaoEncontradaComponent,
        VeiculosComponent,
        VeiculosCadastroComponent,
        VeiculosListagemComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
