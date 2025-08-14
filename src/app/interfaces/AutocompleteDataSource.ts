import { Observable } from "rxjs";

export interface AutocompleteDataSource {
  label: string,
  bindValue: string,
  bindLabel: string,
  minLength: number,
  debounceTime: number
  search(q: string): Observable<any>
}
