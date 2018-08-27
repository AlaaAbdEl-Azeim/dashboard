import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { DaySuffixPipe } from './pipes/day-suffix.pipe';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
    DaySuffixPipe
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
