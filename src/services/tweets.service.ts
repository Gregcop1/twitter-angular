import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tweetsHelper} from '@helpers';
import {Tweet} from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  public tweets$: BehaviorSubject<Tweet[]> = new BehaviorSubject([]);
  public pending$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.fetch();
  }

  private fetch() {
    this.pending$.next(true);
    setTimeout(() => {
      this.tweets$.next(tweetsHelper.generateTweets(30));
      this.pending$.next(false);
    }, 1000);
  }
}
