import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CatCardComponent } from './shared/cat-card/cat-card.component';
import { InfoCatComponent } from './components/info-cat/info-cat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatCardComponent,
    InfoCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
