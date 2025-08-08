import { ImplicitReceiver } from '@angular/compiler';
import { Component, Input, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-autocomplete',
  imports: [],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css'
})
export class Autocomplete implements OnInit {
  ngOnInit(): void {
    this.control.valueChanges.subscribe()
  }


  @Input({required: true}) config: any

  public control = new FormControl<string>('')

  private items = signal<any>([])
  public loading = signal<boolean>(false)







}
