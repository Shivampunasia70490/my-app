import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { secondcomp } from './second/second.component';
import{HttpClientModule} from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { NewsCardReaderComponent } from './news-card-reader/news-card-reader.component';
import { NewListComponent } from './new-list/new-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    secondcomp,
    NewsComponent,
    NewsCardReaderComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
