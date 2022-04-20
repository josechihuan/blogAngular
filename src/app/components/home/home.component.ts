import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts: Post | any;
  categorias: Categoria[]=[];

  constructor(private postsServices : PostsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.postsServices.getAll();
  }
 // onDoCheck se llama cada vez que el usuario interactua con la interfaz
 ngDoCheck(){
  this.posts = this.postsServices.getAll()
}


}
    

 