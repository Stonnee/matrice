import { getService } from './service/get.service';

import { Subscription, observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matrice';
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





























/*    new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          console.log(this.tables);
        }, 2000
      );
    });*
    
    

  promise(){
    return new Promise((resolve, reject) => {
      var ok = 62;
      resolve(ok);
    });
  }

    
    
    
    */
