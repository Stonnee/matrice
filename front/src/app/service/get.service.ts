import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class getService {
  public reqSubject = new Subject<any[]>();
  private req = [];
  private send;
  private stat = [];
  public statSubject = new Subject<any[]>();


  constructor(private httpClient: HttpClient) {}

  emitReqSubject() {
    this.reqSubject.next(this.req.slice());
    this.statSubject.next(this.stat.slice());
  }

  getReqFromServer(): any {
    
    this.httpClient
      .get<any[]>('http://127.0.0.1:8000/api/matrice/stats/tables')
      .subscribe(
        (response) => {
          this.req = response;
          this.emitReqSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getStatsFromServer(): any {

     var promesse = new Promise(resolve => {
      setTimeout(() => {

        var id = "rp";
        this.httpClient
        .get<any[]>('http://127.0.0.1:8000/api/matrice/stats/'+id)
        .subscribe(
          (response) => {
           this.stat = response;
            this.emitReqSubject();
            resolve(response);
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );        
      });
    });
    

    
   return promesse;
      
  }



  getNoteFromServer(): any {

     var promesse = new Promise(resolve => {
      setTimeout(() => {

        var id = "rp";
        this.httpClient
        .get<any[]>('http://127.0.0.1:8000/api/matrice/stat/note')
        .subscribe(
          (response) => {
           this.stat = response;
            this.emitReqSubject();
            resolve(response);
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );        
      });
    });
    

    
   return promesse;
      
  }

}
