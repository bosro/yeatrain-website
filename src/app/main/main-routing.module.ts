import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../main/about-us/about-us.component';
import { ContactComponent } from '../main/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features/features.component';
import { MainComponent } from './main.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'features', component: FeaturesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ComponentsRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
