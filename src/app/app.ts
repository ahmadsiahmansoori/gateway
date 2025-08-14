import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Autocomplete } from "./autocomplete/autocomplete";

@Component({
  selector: 'app-root',
  imports: [Autocomplete],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gateway');

  public readonly autocompleteDataSource = null;
}
