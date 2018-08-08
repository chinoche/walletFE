import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/auth/auth.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private appService: AppService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(user) {
    this.authService.login(user).subscribe((response: any) => {
      localStorage.setItem('jwid', response.data.token)
      this.appService.set('user', response.data.user);
      this.router.navigate(['dashboard']);
    })
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
