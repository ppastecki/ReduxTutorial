import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './counter.constants';

export function counterReducer(state = 0, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
