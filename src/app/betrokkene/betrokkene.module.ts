import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetrokkeneRoutingModule } from "./betrokkene-routing.module";
import { LandingComponent } from './landing/landing.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';



@NgModule({
  declarations: [
    LandingComponent,
    P1Component,
    P2Component
  ],
  imports: [
    CommonModule,
    BetrokkeneRoutingModule
  ]
})
export class BetrokkeneModule { }
