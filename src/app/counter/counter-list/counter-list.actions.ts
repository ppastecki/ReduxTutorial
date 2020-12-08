import { ADD_COUNTER_ITEM, REMOVE_COUNTER_ITEM } from './counter-list.constants';

export const addCounterItem = (id, title) => ({ type: ADD_COUNTER_ITEM, payload: { id, title } });
export const removeCounterItem = id => ({ type: REMOVE_COUNTER_ITEM, payload: { id } });
