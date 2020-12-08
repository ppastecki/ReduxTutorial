import { ActionPayload } from '../../app.models';
import { ADD_COUNTER_ITEM, REMOVE_COUNTER_ITEM } from './counter-list.constants';
import { Counter } from '../counter.models';

export function counterListReducer(state = [], action: ActionPayload<Counter>) {
    switch (action.type) {
        case ADD_COUNTER_ITEM:
            return [...state, { ...action.payload }];
        case REMOVE_COUNTER_ITEM:
            return state.filter(counter => counter.id !== action.payload.id);
        default:
            return state;
    }
}