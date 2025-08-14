import { E } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, EventEmitter, inject, Input, OnInit, Output, signal, Type } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { catchError, debounceTime, filter, map, Observable, of, switchMap, tap } from 'rxjs';

interface AutocompleteDataSource {
  label: string,
  bindValue: string,
  bindLabel: string,
  minLength: number,
  debounceTime: number
  search(q: string): Observable<any>
}


interface AutocompleteInterface {
  label: string,
  bindValue: string,
  bindLabel: string,
  minLength: number,
  debounceTime: number
  url: string
}


@Component({
  standalone: true,
  selector: 'app-autocomplete',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatProgressSpinnerModule

  ],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css'
})
export class Autocomplete implements OnInit {

  private readonly httpClient = inject(HttpClient)

  @Input({required: true}) config!: AutocompleteInterface | AutocompleteDataSource
  @Output('select') select = new EventEmitter<any>();

  public control = new FormControl<string>('')
  public items = signal<any>([])
  public loading = signal<boolean>(false)


  public displayFn = (item: any) => item?.[this.config.bindLabel] || ''

  ngOnInit(): void {
    this.control.valueChanges
    .pipe(
      debounceTime(this.config.debounceTime),
      map(value => {
        this.loading.set(false)
        if(!value || typeof value !== 'string') return '';
        return value?.trim();
      }),
      filter(value => value.length > this.config.minLength),
      tap(_ => {
        this.loading.set(true)
        this.items.set([])
      }),
      switchMap(value => {

        if((this.config as AutocompleteInterface)?.url != undefined) {
          return this.httpClient.get<any>((this.config as AutocompleteInterface).url, {params: new HttpParams().set('q', value)}).pipe(catchError(() => of([])))
        } else {
          return (this.config as AutocompleteDataSource).search(value)
        }

      }),
      tap(_ => this.loading.set(false))
    )
    .subscribe(result => this.items.set(result))
  }



}
