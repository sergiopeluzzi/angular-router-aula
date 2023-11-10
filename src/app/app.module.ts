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

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

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
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
