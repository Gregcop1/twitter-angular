import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../../interfaces';
import gravatarHelper from '../../../helpers/gravatar';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-simple-writer',
  template: `
    <div class="writer-block--fold">
      <img [src]="getAvatar(user.email)" [alt]="user.name" class="avatar" />
      <input type="text" placeholder="Ecrivez votre texte ici..." (focus)="focus($event)"/>
      <i class="fa fa-picture-o"></i>
    </div>
  `,
})
export class SimpleWriterComponent implements OnInit {
  @Output() onFocus: EventEmitter<null> = new EventEmitter(false);
  private user: User;
  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
  }

  public focus(event) {
    event.preventDefault();
    this.onFocus.emit();
  }
}
