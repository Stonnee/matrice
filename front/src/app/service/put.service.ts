import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class putService {
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

  putReqFromServer(form: Array<any>): void {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json');

    this.send = {
      title: form[0],
      nb: form[1],
    };

    this.httpClient
      .put('http://127.0.0.1:8000/api/stuff/' + form[2], this.send, { headers })
      .subscribe(
        () => {
          console.log('modif');
          this.emitReqSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


  putNoteFromServer(form: NgForm): void {

    this.send = {
      name: form.value['name'],
      content: form.value['content'],
    };
    

    this.httpClient
      .put('http://127.0.0.1:8000/api/matrice/stat/note/' + form.value['id'], this.send)
      .subscribe(
        () => {
          console.log('modif');
          this.emitReqSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
