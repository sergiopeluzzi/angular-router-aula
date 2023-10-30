import { Component, Input } from "@angular/core";

@Component({
    selector: "app-clientes-listagem",
    templateUrl: "./clientes-listagem.component.html",
    styleUrls: ["./clientes-listagem.component.css"],
})
export class ClientesListagemComponent {
    @Input() dados!: any[];
}
