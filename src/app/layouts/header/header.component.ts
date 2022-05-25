import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navLinks = [
    {
      path: 'home',
      label: 'Home'
    },
    {
      path: 'posts',
      label: 'Posts'
    },
    {
      path: 'users',
      label: 'Users'
    }
  ];

  public loginStatus: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  fakeLogin() {
    this.loginStatus = !this.loginStatus;
  }

}
