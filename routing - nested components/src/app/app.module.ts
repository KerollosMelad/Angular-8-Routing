import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { Aa1Component } from './a/aa1/aa1.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    Aa1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule        //  hint 1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
