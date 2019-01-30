import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  template: `
    <aside class="column aside-primary">
      <app-short-profile></app-short-profile>
      <app-trend-list></app-trend-list>
    </aside>
  `,
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
