import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  opcSelect: string = "endereco";

  lsEnderecos: Array<endereco> = [
    {
      logradouro: "Avenida Braz Leme, 1000",
      bairro: "Santana",
      cep: "02511-000",
      cidade: "São Paulo",
      uf: "SP",
      tipoEndereco: "Principal"
    },
    {
      logradouro: "Av. Morumbi, 8390",
      bairro: "Brooklin",
      cep: "04703-002",
      cidade: "São Paulo",
      uf: "SP",
      tipoEndereco: "Comercial"
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clicaItemMenu(opc:string){
    this.opcSelect = opc
    /*
    switch (opc) {
      case "dados":
        console.log('dasdas')
        break;
      case "endereco":
        console.log('dasdas')
        break;
      case "pedido":
        console.log('dasdas')
        break;
      case "FAQ":
        console.log('dasdas')
        break;
      default:
        break;
    }
    */
  }
}

interface endereco{
  logradouro: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  tipoEndereco: string;
}