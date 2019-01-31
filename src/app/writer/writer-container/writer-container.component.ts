import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-writer-container',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="block writer-block">
      <app-simple-writer *ngIf="fold; else unfold" (onFocus)="toggleFold(false)"></app-simple-writer>
      <ng-template #unfold>
        <app-full-writer (onBlur)="toggleFold(true)"></app-full-writer>
      </ng-template>
    </div>
  `,
  styleUrls: ['./writer-container.component.scss']
})
export class WriterContainerComponent {
  public fold = true;

  toggleFold(value: boolean) {
    this.fold = value;
  }
}
