import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter/counter.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterState } from './counter.models';
import { counterReducer } from './counter/counter.reducer';
import { counterListReducer } from './counter-list/counter-list.reducer';

const reducer: ActionReducerMap<CounterState> = {
  count: counterReducer,
  counters: counterListReducer
};

@NgModule({
  declarations: [CounterComponent, CounterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('counter', reducer)],
  exports: [CounterComponent, CounterListComponent]
})
export class CounterModule { }
