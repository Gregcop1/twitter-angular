import {Component, OnInit} from '@angular/core';
import {Tweet} from '@interfaces';
import {TweetsService} from '@services';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="home">
      <app-left-sidebar></app-left-sidebar>
      <div class="column main-content">
        <app-writer-container></app-writer-container>
        <app-tweet-list [tweets]="tweets"></app-tweet-list>
      </div>
      <app-right-sidebar></app-right-sidebar>
    </div>
  `,
})
export class HomePageComponent implements OnInit {
  private tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweetsService.tweets$.subscribe(tweets => this.tweets = tweets);
  }
}
