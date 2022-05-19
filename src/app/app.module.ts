import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FormComponent } from './form/form.component';
import { WelcomeWindowComponent } from './welcome-window/welcome-window.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FormComponent,
    WelcomeWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
