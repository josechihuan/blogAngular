import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts: Post[]=[];
 

  
  constructor(private postsServices : PostsService, 
    private activatedRoute: ActivatedRoute) { }
   
    
  ngOnInit(): void {
    this.posts = this.postsServices.getAll();
    this.activatedRoute.params.subscribe(params => {
     // console.log(params['categoriaTitulo'])
      const categoria =params['categoriaId']
      if (params['categoriaId']) {
        this.posts = this.postsServices.getPostByCategorias(categoria)
        //console.log(this.posts)
      } else {
        this.posts = this.postsServices.getAll();
      }
       
    })

  }
}  

 