import { delService } from './../service/del.service';
import { putService } from './../service/put.service';
import { postService } from './../service/post.service';
import { getService } from './../service/get.service';
import { NgForm } from '@angular/forms';

import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, AfterViewInit {
  note: any;
  isNew: boolean = false;
  isPut: boolean = false;
  @ViewChild('name') hiddenInput: ElementRef;
  @ViewChild('content') nbInput: ElementRef;
  @ViewChild('id') idInput: ElementRef;

  constructor(private get: getService, private post: postService, private put: putService, private del: delService, private element: ElementRef) {}

  ngOnInit(): void {
    var promise = this.get.getNoteFromServer();

    promise
      .then((rep) => {
        this.note = rep;
      })
      .catch((error) => {
        console.log(error);
      });
  }


  Ttrigger() {
    this.isNew = true;
  }
  Ftrigger() {
    this.isNew = false;
  }

  onSubmit(form: NgForm) {
      if(this.isPut)
      this.onPut(form);
      else{
      this.post.newNoteFromServer(form);
      form.reset();
      this.ngOnInit();
    }
  }

  onPut(form: NgForm){
   
      this.put.putNoteFromServer(form);
      this.isPut = false;
      form.reset();
      this.ngOnInit();
  }

  aff() {
    this.isPut = true;
  }

  suppr(n) {
    this.del.supprNoteFromServer(n.id_note);
    this.ngOnInit();
  }

  ngAfterViewInit() {}
}
