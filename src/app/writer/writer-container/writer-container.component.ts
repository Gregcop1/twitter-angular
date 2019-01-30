import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-writer-container',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="block writer-block">
      <app-simple-writer *ngIf="fold" (onFocus)="toggleFold()"></app-simple-writer>
      <app-full-writer *ngIf="!fold" (onBlur)="toggleFold()"></app-full-writer>
    </div>
  `,
  styleUrls: ['./writer-container.component.scss']
})
export class WriterContainerComponent {
  private fold = false;

  toggleFold() {
    this.fold = !this.fold;
  }
}
