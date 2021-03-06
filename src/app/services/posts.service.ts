import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[] = POSTS;
  private id: number = 6;

  constructor() { }

  getAll(){
    return this.arrPosts;

  }
  create(pForm: any){
    const newPost = { id:this.id, ...pForm }
    this.arrPosts.push(newPost)
    this.id++;
    return this.arrPosts;
  }
  
    getById(pId:number): Post | any{
    
      return this.arrPosts.find(post => post.id === pId)
  }

    getPostByCategorias(pCat:string){
      return this.arrPosts.filter(post => post.categoria === pCat)
            
    }
  }
  
