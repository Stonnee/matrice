import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class postService {
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

  newReqFromServer(form: NgForm): void {

    this.send = {
      name: form.value['name'],
      color: form.value['color'],
    };

    this.httpClient
      .post('http://127.0.0.1:8000/api/matrice/stats/table', this.send)
      .subscribe(
        () => {
          this.emitReqSubject();
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  newNoteFromServer(form: NgForm): void {
    
    this.send = {
      name: form.value['name'],
      content: form.value['content'],
    };

    this.httpClient
      .post('http://127.0.0.1:8000/api/matrice/stat/note', this.send)
      .subscribe(
        () => {
          this.emitReqSubject();
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
