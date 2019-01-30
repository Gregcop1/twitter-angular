import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-full-writer',
  template: `
    <div class="writer-block--unfold">
      <form>
        <textarea
          #field
          title="message"
          [(ngModel)]="value"
          (blur)="blur()"
          rows="3"
          [ngModelOptions]="{standalone: true}"
        ></textarea>
        <app-action-bar-writer [length]="value.length"></app-action-bar-writer>
      </form>
    </div>
  `,
})
export class FullWriterComponent implements OnInit {
  @ViewChild('field') field: ElementRef;
  @Output() onBlur: EventEmitter<null> = new EventEmitter(false);
  private value = '';

  ngOnInit(): void {
    (this.field.nativeElement as HTMLTextAreaElement).focus();
  }

  public blur() {
    if ('' === this.value.trim()) {
      this.onBlur.emit();
    }
  }
}
