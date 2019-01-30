import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces';
import gravatarHelper from '../../../helpers/gravatar';

@Component({
  selector: 'app-short-profile',
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.scss']
})
export class ShortProfileComponent implements OnInit {
  private user: User;
  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;

  ngOnInit() {
    this.user = {
      name: 'Grégory Copin',
      email: 'gregcop1@gmail.com',
      account: 'gregcop1',
    };
  }

}
