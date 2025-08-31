import { Component, signal } from '@angular/core';
import { Select } from "./select/select";

@Component({
  selector: 'app-root',
  imports: [Select],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gateway');
}
