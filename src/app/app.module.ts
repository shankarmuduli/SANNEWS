import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewscontentComponent } from './newscontent/newscontent.component';
import { ArticlespageComponent } from './articlespage/articlespage.component';

@NgModule({
  declarations: [
    AppComponent,
  
    NewscontentComponent,
    ArticlespageComponent
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
