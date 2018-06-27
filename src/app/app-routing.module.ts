import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { OverviewComponent } from './overview/overview.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'overview'},
  {path: 'overview', component: OverviewComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
  constructor(private router: Router) {
  }
 }
