import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tweetsHelper} from '@helpers';
import {Tweet, User} from '@interfaces';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  private user: User;
  public tweets$: BehaviorSubject<Tweet[]> = new BehaviorSubject([]);
  public pending$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(userService: UserService) {
    userService.user$.subscribe(user => this.user = user);
    this.fetch();
  }

  private fetch(): void {
    this.pending$.next(true);
    setTimeout(() => {
      this.tweets$.next(tweetsHelper.generateTweets(30));
      this.pending$.next(false);
    }, 1000);
  }

  public add(message: string): void {
    this.pending$.next(true);
    setTimeout(() => {
      this.tweets$.next([
        {
          author: this.user,
          date: new Date().getTime(),
          message,
          shares: {
            answer: 0,
            like: 0,
            retweet: 0,
          },
        },
        ...this.tweets$.getValue()
      ]);
      this.pending$.next(false);
    }, 1000);
  }
}
