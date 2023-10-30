import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-veiculos-cadastro",
    templateUrl: "./veiculos-cadastro.component.html",
    styleUrls: ["./veiculos-cadastro.component.css"],
})
export class VeiculosCadastroComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params["id"];
    }

    ngOnInit(): void {
        if (this.id) console.log(this.id);
    }
}
