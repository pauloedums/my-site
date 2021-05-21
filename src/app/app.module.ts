import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OauthModule } from './oauth/oauth.module';
import { MainPageComponent } from './home/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    // OauthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
