import {Component, Input} from '@angular/core';
import {Tweet} from '../../../interfaces';
import dateHelper from '../../../helpers/date';
import gravatarHelper from '../../../helpers/gravatar';

@Component({
  selector: 'app-tweet-list-item',
  templateUrl: './tweet-list-item.component.html',
  styleUrls: ['./tweet-list-item.component.scss']
})
export class TweetListItemComponent {
  @Input() tweet: Tweet;

  public fromNow: (timestamp: number) => string = dateHelper.fromNow;
  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;
}
