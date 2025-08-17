import { Component, Input, input, output } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { JalaliMomentDateAdapter } from '../JalaliMomentDateAdapter';

import moment from 'jalali-moment';

export const PERSIAN_DATE_FORMATS = { parse: { dateInput: 'YYYY/MM/DD' }, display: { dateInput: 'YYYY/MM/DD', monthYearLabel: 'YYYY MMM', dateA11yLabel: 'YYYY/MM/DD', monthYearA11yLabel: 'YYYY MMMM', }, };

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



  label = input.required<string>()
  control = new FormControl()
  valueChange = output<string>()

  @Input({required: false})
  set value(date: string) {
    const gDate = moment(date, 'jYYYY/jMM/jDD').toDate();
    this.control.setValue(gDate)
  }

  @Input({required: false}) initValue: boolean = false


  ngOnInit(): void {
    this.control.valueChanges.subscribe(date =>{
      if (!date) {
        this.valueChange.emit('');
        return;
      }
      const jDate = moment(date).locale('fa').format('jYYYY/jMM/jDD');
      this.valueChange.emit(jDate);

    })



    if(this.initValue === true) {
      this.control.setValue(new globalThis.Date())
    }
  }


}
