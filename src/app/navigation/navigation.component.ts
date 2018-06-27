import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isCollapsed = true;
  cookieValue = 'default';
  constructor ( private cookieService: CookieService ) { }

  ngOnInit() {
    console.log("Anglar 5 >> " + this.cookieService.get( 'newCookie' ));
  }

}
