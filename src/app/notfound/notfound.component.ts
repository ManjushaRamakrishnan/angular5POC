import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService ) { }

  ngOnInit() {
     window.location.href = `http://localhost:8000/#${this.router.url}?` + ( this.cookieService.get( 'ban' ) && "ban=" + this.cookieService.get( 'ban' ) ) + ( this.cookieService.get( 'legacy' ) && "&legacy=true" );
  }

}
