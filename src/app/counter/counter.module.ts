import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { CounterState } from './counter.models';
import { counterReducer } from './counter.reducer';

const reducer: ActionReducerMap<CounterState> = {
  count: counterReducer
};

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, StoreModule.forFeature('counter', reducer)],
  exports: [CounterComponent]
})
export class CounterModule { }
