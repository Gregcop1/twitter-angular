import {Component, OnInit} from '@angular/core';
import gravatarHelper from '../../../helpers/gravatar';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces';

@Component({
  selector: 'app-short-profile',
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.scss']
})
export class ShortProfileComponent implements OnInit {
  private user: User;
  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe(user => this.user = user);
  }

}
