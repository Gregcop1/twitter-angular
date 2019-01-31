import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-action-bar-writer',
  templateUrl: './action-bar-writer.component.html',
})
export class ActionBarWriterComponent {
  private static MAX_LENGTH = 140;

  @Input() length: number;

  public get remaining() {
    return ActionBarWriterComponent.MAX_LENGTH - this.length;
  }

  public get isBelowEnd() {
    return 0 > this.remaining;
  }

  public get isNearTheEnd() {
    return !this.isBelowEnd && 20 >= this.remaining;
  }

  public get isTweetable() {
    return !this.isBelowEnd && ActionBarWriterComponent.MAX_LENGTH !== this.remaining;
  }
}
