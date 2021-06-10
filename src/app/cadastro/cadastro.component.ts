import { ProductService } from './../../services/services.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  products = {
    id : '',
    nome : '',
    descricao: '',
    price: '',
    fornecedor:'',
    observacao:''
  }
submitted = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
   
  }
  cadastrarProdutos():void{

   const data = {
     id: this.products.id,
     nome : this.products.nome,
     descricao : this.products.descricao,
     price : this.products.price,
     fornecedor : this.products.fornecedor,
    observacao: this.products.observacao
   }
   this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          alert('Registro inserido com sucesso');
        },
        error => {
          alert('Erro na inserção');
          console.log(error);
        });
  }
}
