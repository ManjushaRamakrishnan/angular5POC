import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  summary;
  discounts;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('../assets/summary.json').subscribe((response) => {
      this.summary = response;
    });
    this.http.get('../assets/discount.json').subscribe((response) => {
      this.discounts = response;
    });
  }
}
