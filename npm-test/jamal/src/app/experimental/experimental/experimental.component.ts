import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.css']
})
export class ExperimentalComponent implements OnInit {
  cars = [{ name: 'jhon' }, { name: 'jhon1' }];
  constructor() { }

  ngOnInit() {
    const n = this.cars.map(car => {
      return car['model'] = '120';
    });
    console.log(n);
  }
}
