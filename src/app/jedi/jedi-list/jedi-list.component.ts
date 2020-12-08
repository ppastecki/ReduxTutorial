import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../app.state';
import { addJedi, removeJedi, loadJedis } from './jedi-list.actions';
import { Jedi } from '../jedi.model';

@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.css']
})
export class JediListComponent {
  private count = 0;
  jedis$: Observable<Array<Jedi>>;
  newJediName = "";

  constructor(private store: Store<AppState>) {
    this.jedis$ = store.select<Array<Jedi>>(store => store.jedis);
  }

  add() {
    this.store.dispatch(addJedi(this.count++, this.newJediName));
    this.newJediName = "";
  }

  remove(id) {
    this.store.dispatch(removeJedi(id));
  }

  clear() {
    this.store.dispatch(loadJedis([]));
    this.count = 0;
  }
}
