import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {P1Component} from "./p1/p1.component";
import {P2Component} from "./p2/p2.component";


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'p1',
    component: P1Component,
  },
  {
    path: 'p2',
    component: P2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetrokkeneRoutingModule {}
