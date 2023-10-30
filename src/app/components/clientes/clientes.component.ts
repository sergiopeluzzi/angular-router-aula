import { Component } from "@angular/core";

interface ICliente {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
}

const clientes: ICliente[] = [
    {
        nome: "João",
        cpf: "12345678910",
        telefone: "11999999999",
        email: "joao@email.com",
    },
    {
        nome: "Maria",
        cpf: "10987654321",
        telefone: "11999999999",
        email: "maria@email.com",
    },
    {
        nome: "José",
        cpf: "12345678910",
        telefone: "11999999999",
        email: "jose@email.com",
    },
];

@Component({
    selector: "app-clientes",
    templateUrl: "./clientes.component.html",
    styleUrls: ["./clientes.component.css"],
})
export class ClientesComponent {
    clientes: ICliente[] = clientes;
    id!: string;
}
