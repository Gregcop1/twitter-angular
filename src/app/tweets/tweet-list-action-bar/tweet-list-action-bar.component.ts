import {Component, Input} from '@angular/core';
import {Share} from '../../../interfaces';

@Component({
  selector: 'app-tweet-list-action-bar',
  templateUrl: './tweet-list-action-bar.component.html',
  styleUrls: ['./tweet-list-action-bar.component.scss']
})
export class TweetListActionBarComponent {
  @Input() shares: Share;
}
