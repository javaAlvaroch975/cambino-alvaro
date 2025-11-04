import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service-honkai';
import { HonkaiCharacter } from '../../model/postInterface-honkai';

@Component({
  selector: 'app-post-list-honkai',
  imports: [],
  templateUrl: './post-list-honkai.html',
  styleUrl: './post-list-honkai.css',
})

export class HonkaiComp {

  posts: HonkaiCharacter[] = [];

  constructor(private oJsonplaceholderService: JsonplaceholderService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.oJsonplaceholderService.getAllPosts().subscribe((posts: any) => {
      console.log(posts);
      this.posts = Object.values(posts);
    });
  }
}
