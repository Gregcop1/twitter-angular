import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './the-header/the-header.component';
import {HomePageComponent} from './pages/home.page';
import { ShortProfileComponent } from './sidebars/short-profile/short-profile.component';
import { LeftSidebarComponent } from './sidebars/left-sidebar/left-sidebar.component';
import { TrendListComponent } from './sidebars/trend-list/trend-list.component';
import { SuggestionListComponent } from './sidebars/suggestion-list/suggestion-list.component';
import { RightSidebarComponent } from './sidebars/right-sidebar/right-sidebar.component';
import { WriterContainerComponent } from './writer/writer-container/writer-container.component';
import { SimpleWriterComponent } from './writer/simple-writer/simple-writer.component';
import { FullWriterComponent } from './writer/full-writer/full-writer.component';
import {FormsModule} from '@angular/forms';
import {UserService} from '../services/user.service';
import { ActionBarWriterComponent } from './writer/action-bar-writer/action-bar-writer.component';
import { TweetListComponent } from './tweets/tweet-list/tweet-list.component';
import {TweetsService} from '../services/tweets.service';
import { TweetListItemComponent } from './tweets/tweet-list-item/tweet-list-item.component';
import { TweetListActionBarComponent } from './tweets/tweet-list-action-bar/tweet-list-action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TheHeaderComponent,
    ShortProfileComponent,
    LeftSidebarComponent,
    TrendListComponent,
    SuggestionListComponent,
    RightSidebarComponent,
    WriterContainerComponent,
    SimpleWriterComponent,
    FullWriterComponent,
    ActionBarWriterComponent,
    TweetListComponent,
    TweetListItemComponent,
    TweetListActionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TweetsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
