import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="home">
      <app-left-sidebar></app-left-sidebar>
      <div class="column main-content">
        <app-writer-container></app-writer-container>
        <!--<List :tweets="tweets"></List>-->
      </div>
      <app-right-sidebar></app-right-sidebar>
    </div>
  `,
})
export class HomePageComponent {
}
