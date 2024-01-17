import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 public title: string = 'Mi primer app de Angular';
 public counter: number = 10;

  ingreaseBy(value: number):void {
  this.counter += value;
 }

 Resetcounter(){
  this.counter = 10;
 }

}
