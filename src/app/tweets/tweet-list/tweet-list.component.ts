import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tweet} from '@interfaces';

@Component({
  selector: 'app-tweet-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tweet-list">
      <app-tweet-list-item *ngFor="let tweet of tweets" [tweet]="tweet"></app-tweet-list-item>
    </div>
  `,
})
export class TweetListComponent {
  @Input() tweets: Tweet[];
}
