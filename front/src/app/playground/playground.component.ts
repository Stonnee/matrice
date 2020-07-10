import { getService } from './../service/get.service';
import { AppComponent } from './../app.component';
import { Subscription, observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
 
   public stat;
  private statSubscripion: Subscription;

  constructor(private get:getService, private main: AppComponent, private router: Router) { }

  ngOnInit(): void {
    
    
    this.statSubscripion = this.get.statSubject
    .subscribe((req:any[])=>{ 
      this.stat = req;
    });

    this.router.navigate(['matrice/home']);
  }

}