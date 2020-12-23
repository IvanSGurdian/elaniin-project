import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryData } from '../models/category.model';
import { Contact } from '../models/contact.model';
import { Locations } from '../models/location.model';
import { Menu } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.elaniin.dev/api';

  constructor(private http: HttpClient) { }

  getLocations(type: string, query?: string): Observable<Locations> {
    let httpParams = new HttpParams().set('type', type);

    if (query) {
      console.log(query);
      httpParams =  httpParams.append('query', query);
    }

    return this.http.get<Locations>(`${this.apiUrl}/locations`, { params: httpParams });
  }

  getCategories(): Observable<CategoryData> {
    return this.http.get<CategoryData>(`${this.apiUrl}/categories`);
  }

  getMenu(category?: string, query?: string): Observable<Menu> {
    let httpParams = new HttpParams();

    if (category) {
      httpParams = httpParams.append('category', category);
    }

    if (query) {
      httpParams = httpParams.append('query', query);
    }

    return this.http.get<Menu>(`${this.apiUrl}/menu`, { params: httpParams });
  }

  paginateMenu(path: string): Observable<Menu> {
    return this.http.get<Menu>(path);
  }

  sendContact(payload: Contact): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, payload);
  }
}
