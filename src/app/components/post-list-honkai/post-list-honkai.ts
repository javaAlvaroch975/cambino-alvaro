import { Component } from '@angular/core';
import { JsonplaceholderServiceHonkai } from '../../services/jsonplaceholder-service-honkai';
import { HonkaiCharacter } from '../../model/postInterface-honkai';

@Component({
  selector: 'app-post-list-honkai',
  imports: [],
  templateUrl: './post-list-honkai.html',
  styleUrl: './post-list-honkai.css',
})

export class HonkaiComp {

  posts: HonkaiCharacter[] = [];

  constructor(private oJsonplaceholderService: JsonplaceholderServiceHonkai) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.oJsonplaceholderService.getAllPosts().subscribe((data) => {
      console.log(data);
      this.posts = Object.values(data);
    });
  }
}
