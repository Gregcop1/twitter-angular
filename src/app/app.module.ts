import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FromNowPipe, GravatarPipe} from '@pipes';
import {TweetsService, UserService} from '@services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent, MyTweetsPagePageComponent} from './pages';
import {
  LeftSidebarComponent,
  RightSidebarComponent,
  ShortProfileComponent,
  SuggestionListComponent,
  TrendListComponent
} from './sidebars';
import { TheHeaderComponent, TheMainNavComponent } from './header';
import { TweetListComponent, TweetListActionBarComponent, TweetListItemComponent } from './tweets';
import { ActionBarWriterComponent, FullWriterComponent, SimpleWriterComponent, WriterContainerComponent } from './writer';

@NgModule({
  declarations: [
    ActionBarWriterComponent,
    AppComponent,
    FromNowPipe,
    FullWriterComponent,
    GravatarPipe,
    HomePageComponent,
    LeftSidebarComponent,
    MyTweetsPagePageComponent,
    RightSidebarComponent,
    ShortProfileComponent,
    SimpleWriterComponent,
    SuggestionListComponent,
    TheHeaderComponent,
    TrendListComponent,
    TweetListComponent,
    TweetListItemComponent,
    TweetListActionBarComponent,
    WriterContainerComponent,
    TheMainNavComponent,
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
