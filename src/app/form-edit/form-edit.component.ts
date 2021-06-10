 
import { ProductService } from 'src/services/services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
public userId;
  constructor(private productService : ProductService, private route: ActivatedRoute,   private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);

  }
  products = {
    nome : '',
    descricao: '',
    price: '',
    fornecedor:'',
    observacao:''
  }
  listarProdutos(): void{

    this.productService.read(this.userId)
        .subscribe(
          data => {
            this.products = data;
  
            console.log(data);
          },
          error => {
            console.log(error);
          });

        }

  ngOnInit(): void {
    this.listarProdutos();
    // console.log(this.id);      
 
  }
editarProdutos(){
 
 const data = {
    id: this.userId,
    nome : this.products.nome,
    descricao : this.products.descricao,
    price : this.products.price,
    fornecedor : this.products.fornecedor,
   observacao: this.products.observacao
  }

  this.productService.update(this.userId, data)
      .subscribe(
        response => {
          console.log(response);
          alert('Registro atualizado com sucesso');
        },
        error => {
          alert('Erro na inserção');
          console.log(error);
        });
  

  
      }
}

