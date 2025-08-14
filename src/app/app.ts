import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Autocomplete } from "./autocomplete/autocomplete";
import { ItemService } from './services/item-service';

@Component({
  selector: 'app-root',
  imports: [Autocomplete],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gateway');

  public readonly autocompleteDataSource = inject(ItemService);
}
