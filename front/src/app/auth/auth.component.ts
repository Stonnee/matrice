import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authSubscription: Subscription;
  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authSubscription = this.authService.authSubject.subscribe(
      (auth: any) => {
        this.authStatus = auth;
      }
    );
    this.authStatus = this.authService.isAuth;
  }

  onSignOut() {

    this.authService.signOut();

    this.authStatus = this.authService.isAuth;
  }

  onSubmit(form: NgForm) {
    this.authService.signIn(form).add(
      () => this.router.navigate(['matrice'])
      );
    this.authStatus = this.authService.isAuth;
  }
}
