import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewInit {
  @Input() targetValue: any = 0;
  @Input() speed: number = 97;
  @Input() text: string = ''; 
  currentValue: any = 0;

  ngAfterViewInit(): void {
    this.animateCount();
  }

  animateCount() {
    const inc = this.targetValue / this.speed;

    const upData = () => {
      if (this.currentValue < this.targetValue) {
        this.currentValue = Math.floor(inc + this.currentValue);
        setTimeout(upData, 1);
      } else {
        this.currentValue = this.targetValue + "+";
      }
    };

    upData();
  }
}
