import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedRssService {

  private readonly api: string = `${environment.apiInovatech}/feed-rss`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {

  }

}