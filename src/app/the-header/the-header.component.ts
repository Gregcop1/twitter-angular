import {Component, OnInit} from '@angular/core';
import {TweetsService} from '../../services/tweets.service';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.scss']
})
export class TheHeaderComponent implements OnInit {
  private pending = false;

  constructor(private tweetsService: TweetsService) {}

  ngOnInit() {
    this.tweetsService.pending$.subscribe(pending => this.pending = pending);
  }
}
