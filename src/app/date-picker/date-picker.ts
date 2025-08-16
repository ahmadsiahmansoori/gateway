import { Component, Input, input, output } from '@angular/core';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDateFormats } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PERSIAN_DATE_FORMATS } from '../app.config';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { JalaliMomentDateAdapter } from '../JalaliMomentDateAdapter';




@Component({
  selector: 'app-date-picker',
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fa' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false, strict: true } },
    { provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.css'
})
export class DatePicker {

  startDate = new Date(2025, 6, 12); // (year, monthIndex, day) -- Gregorian date


  label = input.required<string>()
  control = new FormControl<string>('')
  valueChange = output<string>()

  @Input({required: false})
  set value(date: string) {
    this.control.setValue(date)
  }

  @Input({required: false})
  set initValue(ok: boolean){
    const date = new globalThis.Date().toLocaleDateString('fa-IR');
    if(ok === true) {
      this.control.setValue(date)
    }

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.control.valueChanges.subscribe(data => this.valueChange.emit((data as string)))
  }


}
