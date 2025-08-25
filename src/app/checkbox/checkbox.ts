import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class Checkbox {


  @Input({required:true}) label: string = ''
  @Input({required: false}) disabled = false;

  @Input() control!: FormControl;

  @Input() checked?: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();



  ngOnInit(): void {
    if (!this.control) {
      this.control = new FormControl(this.checked || false);
    }

    this.control.valueChanges.subscribe(e => this.checkedChange.emit(e))
  }

  onChange(value: boolean) {
    this.control.setValue(value);
  }



}
