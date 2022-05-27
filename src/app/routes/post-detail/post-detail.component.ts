import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from "../../services/post/post.service";
import {IPost} from "../../models/Post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public postDetail: IPost | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    // get actual post id from url
    this.route.params.subscribe(params => {
      this.getPostDetail(params['id']);
    })
  }

  private getPostDetail(postId: number) {
    this.postService.getPostDetail(postId).subscribe(post => {
      this.postDetail = post;
    });
  }

}
