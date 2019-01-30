import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  template: `
    <aside class="column aside-secondary">
      <app-suggestion-list></app-suggestion-list>
    </aside>
  `,
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
