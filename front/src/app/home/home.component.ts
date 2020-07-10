
import { Subscription, observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { getService } from '../service/get.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tables: any[];
  tablesSubscription: Subscription;

  constructor(private get:getService){}

  ngOnInit(): void {
    this.get.getReqFromServer();
    this.tablesSubscription = this.get.reqSubject
    .subscribe((reqs: any[]) => {
      this.tables = reqs;
    });

 
  }

}
