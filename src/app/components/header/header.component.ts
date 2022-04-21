import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias:Categoria[]=[];
  constructor(private router:Router, private categoriasService : CategoriasService) { }

  ngOnInit(): void {
  this.categorias=this.categoriasService.getAllCategorias();

  }
  filtrar($event:any){
      
      this.router.navigate(['/categoria', $event.target.value])
      console.log($event.target.value)
    
  
}
}
