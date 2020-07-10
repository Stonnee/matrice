import { Router } from '@angular/router';
import { postService } from './../service/post.service';
import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-stat',
  templateUrl: './new-stat.component.html',
  styleUrls: ['./new-stat.component.scss']
})
export class NewStatComponent implements OnInit {


  constructor(private post:postService, private router: Router ) { }

  ngOnInit(): void {
    
  }


  async onSubmit(form:NgForm){

    await this.post.newReqFromServer(form);
    this.ngOnInit();
    this.router.navigate(['/matrice/home']);

  }

}
