import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/User";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: IUser[] = [];

  public companyNames = [
    {name: "Robel-Corkery"},
    {name: "Abernathy-Robel"},
    {name: "McClure-Robel"},
    {name: "Robel-Corkery"},
    {name: "Romaguera-Crona"},
    {name: "Deckow-Crist"},
    {name: "Romaguera-Jacobson"},
    {name: "Keebler LLC"},
    {name: "Considine-Lockman"},
    {name: "Johns Group"},
    {name: "Abernathy Group"},
    {name: "Yost and Sons"},
    {name: "Hoeger LLC"},
  ];

  public loading: boolean = true;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getUsers().subscribe(users => {
      this.processData(users);
    });
  }

  private processData(users: IUser[]) {
    this.users = users;
    this.setLoading(false);
    console.log(this.users);
  }

  private setLoading(loading: boolean) {
    this.loading = loading;
  }
}
