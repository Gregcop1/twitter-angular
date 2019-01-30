import {Component, Input} from '@angular/core';
import {Tweet} from '@interfaces';

@Component({
  selector: 'app-tweet-list-item',
  templateUrl: './tweet-list-item.component.html',
  styleUrls: ['./tweet-list-item.component.scss']
})
export class TweetListItemComponent {
  @Input() tweet: Tweet;
}
