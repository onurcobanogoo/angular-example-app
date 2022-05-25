import {Injectable} from '@angular/core';
import {DataService} from "../../api/data.service";
import {Endpoints} from "../../utils/endpoints";
import {HttpMethods} from "../../utils/http-methods";
import {IPost} from "../../models/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private dataService: DataService) {
  }

  public getPosts(): Observable<IPost[]> {
    return this.dataService.serviceRequest<IPost[]>(Endpoints.getPostList, HttpMethods.GET);
  }
}
