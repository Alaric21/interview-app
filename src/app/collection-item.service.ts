import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionItem } from './interface/collection-item';

@Injectable({
  providedIn: 'root'
})
export class CollectionItemService {

  constructor(private http: HttpClient) { }

  getCollectionItems(): Observable<CollectionItem[]> {
    return this.http.get<CollectionItem[]>('/api/collection-items');
  }

  getCollectionItem(): Observable<CollectionItem> {
    return this.http.get<CollectionItem>('/api/collection-items/7');
  }
}
