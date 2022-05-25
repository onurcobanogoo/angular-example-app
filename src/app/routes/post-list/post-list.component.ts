import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/Post";
import {PostService} from "../../services/post/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts: IPost[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPostList();
  }

  private getPostList() {
    this.postService.getPosts().subscribe(posts => {
      this.processData(posts);
    });
  }

  private processData(list: IPost[]) {
    this.posts = list;
  }
}
