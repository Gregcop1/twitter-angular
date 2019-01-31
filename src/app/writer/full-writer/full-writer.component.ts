import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TweetsService} from '@services';

@Component({
  selector: 'app-full-writer',
  template: `
    <div class="writer-block--unfold">
      <form (submit)="submit()">
        <textarea
          #field
          [(ngModel)]="value"
          [ngModelOptions]="{standalone: true}"
          (blur)="blur()"
          (keydown)="keyDown($event)"
          title="message"
          rows="3"
        ></textarea>
        <app-action-bar-writer [length]="value.length"></app-action-bar-writer>
      </form>
    </div>
  `,
})
export class FullWriterComponent implements OnInit {
  @ViewChild('field') field: ElementRef;
  @Output() onBlur: EventEmitter<null> = new EventEmitter(false);
  public value = '';

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    (this.field.nativeElement as HTMLTextAreaElement).focus();
  }

  public blur() {
    if ('' === this.value.trim()) {
      this.onBlur.emit();
    }
  }

  public submit() {
    if ('' !== this.value.trim()) {
      this.tweetsService.add(this.value);
      this.value = '';
      this.blur();
    }
  }

  /**
   * Looks for CTRL + Enter key down to submit the form
   *
   * @param {KeyboardEvent} event
   */
  public keyDown(event: KeyboardEvent) {
    if (event.ctrlKey && 'Enter' === event.key) {
      this.submit();
    }
  }
}
