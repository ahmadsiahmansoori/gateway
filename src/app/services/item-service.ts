import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutocompleteDataSource } from '../interfaces/AutocompleteDataSource';

@Injectable({
  providedIn: 'root'
})
export class ItemService implements AutocompleteDataSource {
  label: string = 'آیتم';
  bindValue: string = 'id';
  bindLabel: string = 'label';
  minLength: number = 3;
  debounceTime: number  = 300;


  private readonly path: string = ''


  constructor(private httpClient: HttpClient) {}


  search(q: string) {
    return this.httpClient.get(this.path, {params: new HttpParams().set('q', q)});
  }

}
