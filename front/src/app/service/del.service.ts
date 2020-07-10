import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class delService {
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


  supprReqFromServer(id): void {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json');

    this.httpClient
      .delete('http://127.0.0.1:8000/api/stuff/' + id, { headers })
      .subscribe(
        () => {
          console.log('suprr');
          this.emitReqSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  supprNoteFromServer(id): void {

    this.httpClient
      .delete('http://127.0.0.1:8000/api/matrice/stat/note/' + id)
      .subscribe(
        () => {
          console.log('suprr');
          this.emitReqSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
