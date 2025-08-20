import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


interface TextInterface {
  label: string,
  placeholder?: string
}



@Component({
  selector: 'app-text',
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './text.html',
  styleUrl: './text.css'
})
export class Text {


  @Input({required: true}) config!: TextInterface
  @Output() valuechange = new EventEmitter<string>();

  @Input({required: false}) set value(text: string) {
    this.control.setValue(text)
  }

  control = new FormControl<string>('')



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.control.valueChanges.subscribe(text => this.valuechange.emit(text || ''))
  }




}
