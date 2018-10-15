import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from '../shared/network.servise';
import { Data } from '../data';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {'class': 'dashboard'}
})
export class DashboardComponent implements OnInit {

  data: Data[]
  status: string;

  constructor(
    private route: ActivatedRoute,
    private networkService: NetworkService
  ) { }

  ngOnInit() { }
  
  getData(): void {
    this.networkService.getData()
      .then(data => this.data = data)
      .catch(err => {
        this.status = err.message;
      });
  }

  postData(name: string): void {
    this.networkService.addData({ name } as Data)
      .then()
      .catch(err => {
        this.status = err.message;
      });
  }

}
