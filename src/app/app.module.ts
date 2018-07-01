import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import {CookieService} from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotfoundComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    SubscriptionsModule,
    HttpClientModule,
   CollapseModule.forRoot(),
   AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
