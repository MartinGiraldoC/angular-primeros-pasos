import { Component } from '@angular/core';

@Component({
  selector: 'app-Counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="ingreaseBy(+1)">+1</button>
  <button (click)="Resetcounter()">Reset</button>
  <button (click)="ingreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  ingreaseBy(value: number):void {
  this.counter += value;
 }

 Resetcounter(){
  this.counter = 10;
 }

}
