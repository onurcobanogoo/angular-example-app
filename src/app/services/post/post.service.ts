import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../api/data.service";
import {Endpoints} from "../../utils/endpoints";
import {HttpMethods} from "../../utils/http-methods";
import {IPost} from "../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private dataService: DataService) {
  }

  public getPosts(): Observable<IPost[]> {
    return this.dataService.serviceRequest<IPost[]>(Endpoints.getPostList, HttpMethods.GET);
  }

  public getPostDetail(id: number): Observable<IPost> {
    return this.dataService.serviceRequest<IPost>(`${Endpoints.getPostList}/${id}`, HttpMethods.GET);
  }
}
