import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isCollapsed = true;
  constructor( private cookieService: CookieService, private url:LocationStrategy ) { 
  }

  ngOnInit() {
    let queryParams : string,
      queryList : Array<string>;
    queryParams = this.url.path().indexOf('?') ? this.url.path().split('?')[1] : "";
    queryParams && ( queryParams = queryParams.indexOf('#') ? queryParams.split('#')[0] : queryParams );
    queryParams && ( queryList = queryParams.indexOf('&') ? queryParams.split('&') : [queryParams] );
    for ( queryParams in queryList ) {
      let queryValue : Array<string>;
      queryValue = queryList[queryParams].split('=');
      console.log("Angular 5 Query string list >> " + queryValue);
      this.cookieService.set( queryValue[0], queryValue[1]+"5" );
    }
  }

}
