import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HonkaiCharacter } from '../model/postInterface-honkai';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderServiceHonkai {
  constructor(private oHttpClient: HttpClient) {
  }

  getAllPosts() {
    return this.oHttpClient.get('https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/en/characters.json');
  }




}
