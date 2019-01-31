import {Component, OnInit} from '@angular/core';
import {Tweet} from '@interfaces';
import {TweetsService} from '@services';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="home">
      <app-left-sidebar></app-left-sidebar>
      <div class="column main-content">
        <app-tweet-list [tweets]="tweets"></app-tweet-list>
      </div>
    </div>
  `,
})
export class MyTweetsPagePageComponent implements OnInit {
  private tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweetsService.ownTweets$.subscribe(tweets => this.tweets = tweets);
  }
}
