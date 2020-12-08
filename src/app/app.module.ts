import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CounterModule } from './counter/counter.module';
import { JediModule } from './jedi/jedi.module';

import { AppComponent } from './app.component';
import { counterReducer } from './counter/counter.reducer';
import { jediListReducer } from './jedi/jedi-list/jedi-list.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      jedis: jediListReducer
    }),
    CounterModule,
    JediModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
