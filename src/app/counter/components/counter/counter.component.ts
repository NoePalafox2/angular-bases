import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h1>hola componente counter</h1>
  <h2>Counter: {{counter}}</h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent implements OnInit{
  counter: number = 10;

  constructor () { }
  ngOnInit() { }

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset() {
    this.counter = 10;
  }

}
