import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  public serviceRequest<Type>(endpoint: string, method: string, data?: any, params?: any) {

    const headerObject = {
      'Content-Type': 'application/json'
    }

    const headers = new HttpHeaders(headerObject);

    return this.httpClient.request<Type>(method, `${environment.apiUrl}${endpoint}`, {
      headers: headers,
      body: data,
      params: params
    });
  }
}
