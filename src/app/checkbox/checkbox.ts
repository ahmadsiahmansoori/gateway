import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class Checkbox {


  @Input({required:true}) label: string = ''
  @Input({required: false}) disabled = false;

  @Input() control?: FormControl;

  @Input() checked?: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();



  ngOnInit(): void {
    if (!this.control) {
      this.control = new FormControl(this.checked || false);
    }
  }

  onChange(value: boolean) {
    if (this.control) {
      this.control.setValue(value);
    } else {
      this.checkedChange.emit(value);
    }
  }



}
