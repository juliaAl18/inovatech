import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input({ required: true }) post!: Post;

  constructor() {}

  ngOnInit(): void {

  }

  shortenString(str: string) {
    if (str.length > 100) {
        return str.slice(0, 100) + "...";
    }
    return str;
  }

}