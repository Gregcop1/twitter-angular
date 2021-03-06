import {Component, OnInit} from '@angular/core';
import {TweetsService} from '@services';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.scss']
})
export class TheHeaderComponent implements OnInit {
  public pending = false;

  constructor(private tweetsService: TweetsService) {}

  ngOnInit() {
    this.tweetsService.pending$.subscribe(pending => this.pending = pending);
  }
}
