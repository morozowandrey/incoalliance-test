import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  host: {'class': 'page'}
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
