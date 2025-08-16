import { Component, signal } from '@angular/core';
import { DatePicker } from "./date-picker/date-picker";

@Component({
  selector: 'app-root',
  imports: [DatePicker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gateway');
}
