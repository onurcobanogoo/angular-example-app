import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  public serviceRequest<Type>(endpoint: string, method: string, data?: any, params?: any): Observable<Type> {

    const headerObject = {
      'Content-Type': 'application/json'
    };

    const headers = new HttpHeaders(headerObject);

    return this.httpClient.request<Type>(method, `${environment.apiUrl}${endpoint}`, {
      headers: headers,
      body: data,
      params: params
    }).pipe(
      map(response => {
        // datayı manupule edebilme ihtimali var ama yapmıyoruz düz data ne ise onu döndürüyoruz.
        return response;
      }),
      catchError(error => {
        // hata yakalama işlemi
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  private handleError(error: any) {
    console.error('Service Error: ', error);
  }
}
