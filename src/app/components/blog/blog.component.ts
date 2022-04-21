import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  post:Post | any;
  constructor(private activateRoute : ActivatedRoute,
    private postServices: PostsService) { }

  ngOnInit(): void {
 this.activateRoute.params.subscribe(params => {
   let id = parseInt(params['idpost'])
   //console.log(id)
   this.post = this.postServices.getById(id)
 })
   
    
  }

}
