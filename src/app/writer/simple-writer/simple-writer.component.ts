import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '@interfaces';
import {UserService} from '@services';

@Component({
  selector: 'app-simple-writer',
  template: `
    <div class="writer-block--fold">
      <img [src]="user.email|gravatar" [alt]="user.name" class="avatar" />
      <input type="text" placeholder="Ecrivez votre texte ici..." (focus)="focus($event)"/>
      <i class="fa fa-picture-o"></i>
    </div>
  `,
})
export class SimpleWriterComponent implements OnInit {
  @Output() onFocus: EventEmitter<null> = new EventEmitter(false);
  private user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
  }

  public focus(event) {
    event.preventDefault();
    this.onFocus.emit();
  }
}
