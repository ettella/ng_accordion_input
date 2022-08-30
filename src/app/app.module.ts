import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { LandingpComponent } from './landingp/landingp.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    LandingpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
