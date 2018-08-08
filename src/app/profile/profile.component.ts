import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getInfo().subscribe((response) => {
      this.userInfo = response;
    })
  }

}
