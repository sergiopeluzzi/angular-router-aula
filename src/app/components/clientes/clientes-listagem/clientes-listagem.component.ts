import { Component, Input } from "@angular/core";

const clientes = [
    {
        id: 1,
        nome: "João",
        cpf: "12345678910",
        telefone: "11912345678",
    },
    {
        id: 2,
        nome: "Maria",
        cpf: "12345678910",
        telefone: "11912345678",
    },
    {
        id: 3,
        nome: "José",
        cpf: "12345678910",
        telefone: "11912345678",
    },
];

@Component({
    selector: "app-clientes-listagem",
    templateUrl: "./clientes-listagem.component.html",
    styleUrls: ["./clientes-listagem.component.css"],
})
export class ClientesListagemComponent {
    displayedColumns = ["id", "nome", "cpf", "telefone"];
    dataSource = clientes;
}
