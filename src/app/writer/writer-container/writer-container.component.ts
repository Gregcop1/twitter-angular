import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writer-container',
  template: `
    <div class="block writer-block">
      <!--<SimpleWriter v-if="!writing" @onFocus="toggleWriting()" />-->
      <!--<FullWriter v-else @onBlur="toggleWriting()"/>-->
    </div>
  `,
  styleUrls: ['./writer-container.component.scss']
})
export class WriterContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
