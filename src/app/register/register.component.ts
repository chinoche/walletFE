import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/auth/auth.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {};

  constructor(private router: Router,
              private authService: AuthService,
              private appService: AppService) { }

  register(userInfo) {
    this.authService.signup(userInfo).subscribe((response: any) => {
      localStorage.setItem('jwid', response.data.token)
      this.appService.set('user', response.data.user);
      this.router.navigate(['dashboard']);
    })
  }
}
