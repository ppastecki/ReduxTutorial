import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { increment, decrement } from './counter.action';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    counter$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter$ = store.select<number>(state => state.counter);
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }
}
