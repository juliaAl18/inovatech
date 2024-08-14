import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { FeedRssService } from 'src/app/services/feed-rss.service';

@Component({
  selector: 'app-feed-rss',
  templateUrl: './feed-rss.component.html',
  styleUrls: ['./feed-rss.component.scss']
})
export class FeedRssComponent implements OnInit {

  posts: Post[] = [];
  @ViewChild('feed') feed!: ElementRef;

  constructor(
    private feedRssService: FeedRssService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.feedRssService.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

  moveLeft(): void {
    this.feed.nativeElement.scrollLeft -= this.feed.nativeElement.offsetWidth;
  }

  moveRight(): void {
    this.feed.nativeElement.scrollLeft += this.feed.nativeElement.offsetWidth;
  }

}
