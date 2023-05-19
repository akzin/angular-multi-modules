import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./shared/login/login.component";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
  {
    path: 'betrokkene',
    loadChildren: () => import('./betrokkene/betrokkene.module').then(m => m.BetrokkeneModule)
  },
  {
    path: 'uitvoerder',
    loadChildren: () => import('./uitvoerder/uitvoerder.module').then(m => m.UitvoerderModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
