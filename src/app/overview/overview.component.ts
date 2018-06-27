import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
 summary;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/summary.json').subscribe((response) => {
      this.summary = response;
    });
  }

}
