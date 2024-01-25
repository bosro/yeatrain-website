import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    margin: 50,
    dots: false,
    nav: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 1,
      },
      560: {
        items: 2,
      },
      960: {
        items: 3,
      },
    },
  };
}
