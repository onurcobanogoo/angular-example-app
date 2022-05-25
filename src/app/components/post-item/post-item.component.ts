import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/Post";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
