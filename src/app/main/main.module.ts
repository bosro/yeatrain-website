import { CommonModule } from '@angular/common';
import { ContactComponent } from '../main/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from '../main/about-us/about-us.component';
import { FeatureCardsComponent } from './feature-cards/feature-cards.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { FeaturesComponent } from './features/features.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CounterComponent } from './header/counter/counter.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    FeatureCardsComponent,
    TestimonialComponent,
    NavbarComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    CounterComponent,
  ],

  imports: [CommonModule, MainRoutingModule, CarouselModule],
})
export class MainModule {}
