import { EnderecoService } from './../endereco.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  enderecos: Array<any>;
  endereco: any;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.listar();

    this.endereco = {};
  }

  listar(){
    this.enderecoService.listar().subscribe(dados => this.enderecos = dados);
  }

  cadastrar(frm: NgForm){

    if(!this.endereco.id)
    {
      this.enderecoService.cadastrar(this.endereco).subscribe(res => {
        this.enderecos.push(res);
        alert("Cadastro Realizado!")
        frm.reset();
        this.listar()
      });
    }else {
      this.enderecoService.atualizar(this.endereco.id, this.endereco).subscribe(res => {
        alert("Atualizado!!")
        frm.reset();
        this.listar()
      });
    }
    
  }

  deletar(id: number){
    this.enderecoService.deletar(id).subscribe(res => {
      alert("Endereço removido!"); 
      this.listar();
    })
  }


  atualizar(endereco: any){
    this.endereco = endereco;
  }

}
