import {Component, OnInit} from '@angular/core';
import {User} from '@interfaces';
import {UserService} from '@services';

@Component({
  selector: 'app-short-profile',
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.scss']
})
export class ShortProfileComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe(user => this.user = user);
  }

}
