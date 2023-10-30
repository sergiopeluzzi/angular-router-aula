import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-clientes-cadastro",
    templateUrl: "./clientes-cadastro.component.html",
    styleUrls: ["./clientes-cadastro.component.css"],
})
export class ClientesCadastroComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params["id"];
    }

    ngOnInit(): void {
        if (this.id) console.log(this.id);
    }
}
