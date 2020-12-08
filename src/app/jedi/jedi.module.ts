import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { JediListComponent } from './jedi-list/jedi-list.component';
import { JediState } from './jedi.models';
import { jediListReducer } from './jedi-list/jedi-list.reducer';

const reducer: ActionReducerMap<JediState> = {
  jedis: jediListReducer
};

@NgModule({
  declarations: [JediListComponent],
  imports: [CommonModule, FormsModule, StoreModule.forFeature('jedi', reducer)],
  exports: [JediListComponent]
})
export class JediModule { }
