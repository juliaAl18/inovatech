import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/Post';

interface PostResponse {
  data: Post[]
}

@Injectable({
  providedIn: 'root'
})
export class FeedRssService {

  private readonly api: string = `${environment.apiInovatech}/feed-rss`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<PostResponse>(this.api).pipe(
      take(1),
      map((respose: PostResponse) => respose.data)
    );
  }

}