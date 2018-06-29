import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
     window.location.href = `http://localhost:8080/#${this.router.url}?` + ( this.cookieService.get( 'name' ) && "name=" + this.cookieService.get( 'name' ) ) + ( this.cookieService.get( 'data' ) && "&data=" + this.cookieService.get( 'data' ) );
  }

}
