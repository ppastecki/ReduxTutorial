import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../app.state';
import { Counter } from '../counter.models';
import { addCounterItem, removeCounterItem } from './counter-list.actions';

@Component({
    selector: 'app-counter-list',
    templateUrl: './counter-list.component.html',
    styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent {
    private count = 0;
    counters$: Observable<Array<Counter>>;
    newCounterName = "";

    constructor(private store: Store<AppState>) {
        this.counters$ = store.select(store => store.counter.counters);
        this.count = 0;
    }

    add() {
        this.store.dispatch(addCounterItem(this.count++, this.newCounterName));
        this.newCounterName = "";
    }

    remove(id) {
        this.store.dispatch(removeCounterItem(id));
    }
}
