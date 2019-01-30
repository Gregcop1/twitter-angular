import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: BehaviorSubject<User> = new BehaviorSubject({
    name: 'Grégory Copin',
    email: 'gregcop1@gmail.com',
    account: '@gregcop1',
    tweetCount: 500 + Math.ceil(Math.random() * 200),
    subscriber: Math.ceil(Math.random() * 200),
    subscription: Math.ceil(Math.random() * 200),
  });
  public user$ = this.user.asObservable();
}
