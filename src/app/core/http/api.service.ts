import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.elaniin.dev/';

  constructor(private http: HttpClient) { }

  getLocations(type: string, query?: string): Observable<Locations> {
    let httpParams = new HttpParams().set('type', type);

    if (query) {
      console.log(query);
      httpParams =  httpParams.append('query', query);
    }

    return this.http.get<Locations>(`${this.apiUrl}api/locations`, { params: httpParams });
  }
}
