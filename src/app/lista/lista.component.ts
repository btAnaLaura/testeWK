import { ProductService } from 'src/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) { }
    listarProdutos(): void{
        this.productService.readAll()
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
  }

  excluirProduto(id){
    confirm('Deseja mesmo excluir?');
    this.productService.delete(id);
    console.log('excluir');
  }
}
