import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuroSelectModule } from './turo-select/turo-select.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TuroSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
