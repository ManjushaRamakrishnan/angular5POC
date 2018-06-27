import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { Ang5PocComponent } from './ang5-poc/ang5-poc.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Ang5PocComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    SubscriptionsModule,
    HttpClientModule,
   CollapseModule.forRoot(),
   AppRoutingModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
