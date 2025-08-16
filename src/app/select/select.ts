import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
export interface SelectInterface {
  label: string,
  bindLabel: string,
  bindValue: string,
  multiple?: boolean
}


@Component({
  selector: 'app-select',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './select.html',
  styleUrl: './select.css'
})
export class Select<T = any>  implements OnInit{


  control = new FormControl();


  config = input.required<SelectInterface>();
  valueChange = output<T | T[] | null>();
  options = input<any[]>([])


  @Input()
  set value(val: T | T[] | null) {
    this.control.setValue(val);
  }

  select(item: any) {

    this.valueChange.emit(item)
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(console.log)
  }


}
