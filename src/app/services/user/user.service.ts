import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../api/data.service";
import {IUser} from "../../models/User";
import {Endpoints} from "../../utils/endpoints";
import {HttpMethods} from "../../utils/http-methods";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService: DataService) {
  }

  public getUsers(): Observable<IUser[]> {
    return this.dataService.serviceRequest<IUser[]>(Endpoints.getUserList, HttpMethods.GET);
  }
}
