import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    CounterModule,
    JediModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
