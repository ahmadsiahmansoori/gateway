import { Component, Input } from '@angular/core';


export interface SelectInterface {
  label: string,
  bindLabel: string,
  bindValue: string,
  multiple?: boolean
}


@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.css'
})
export class Select {



  @Input({required: true}) config!: SelectInterface
  @Input({required: true}) options: any[] = [];
  @Input({required: false}) value: any;




}
