import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CounterModule } from './counter/counter.module';
import { JediModule } from './jedi/jedi.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    CounterModule,
    JediModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
