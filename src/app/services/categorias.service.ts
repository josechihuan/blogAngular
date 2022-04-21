import { Injectable } from '@angular/core';
import { CATEGORIAS } from '../db/categorias.db';
import { POSTS } from '../db/posts.db';
import { Categoria } from '../interfaces/categoria';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
 private arrCategorias : Categoria[]= CATEGORIAS;
 
 private arrPosts: Post[] = POSTS;
  constructor() {
  
   }
  getAllCategorias(){
    return this.arrCategorias;
  }
}