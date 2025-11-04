import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service-honkai';
import { Post } from '../../model/postInterface-honkai';

@Component({
  selector: 'app-post-list-honkai',
  imports: [],
  templateUrl: './post-list-honkai.html',
  styleUrl: './post-list-honkai.css',
})

export class PostListComponent {

  posts: Post[] = [];

  constructor(private oJsonplaceholderService: JsonplaceholderService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.oJsonplaceholderService.getAllPosts().subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
