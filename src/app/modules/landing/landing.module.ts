import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    AboutComponent,
    LocationsComponent,
    LocationCardComponent,
    TestimonialsComponent,
    ContactComponent,
    BenefitsComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  providers: [
    
  ]
})
export class LandingModule { }
