import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Ang5PocComponent } from './ang5-poc/ang5-poc.component';
import { NotfoundComponent } from './notfound/notfound.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'newapp'},
  {path: 'newapp', component: Ang5PocComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
  constructor(private router: Router) {
  }
 }
