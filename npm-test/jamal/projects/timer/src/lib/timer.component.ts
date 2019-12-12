import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-timer',
  template: `
    <p>
      timer works!
    </p>
  `,
  styles: ['./timer.component.c.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
