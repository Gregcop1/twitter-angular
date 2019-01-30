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
    WriterContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
