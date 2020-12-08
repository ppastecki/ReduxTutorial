import { ActionPayload } from '../../app.models';
import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from './jedi-list.constants';

export function jediListReducer(state = [], action: ActionPayload<any>) {
    switch (action.type) {
        case ADD_JEDI:
            return [...state, { ...action.payload }];
        case REMOVE_JEDI:
            return state.filter(jedi => jedi.id !== action.payload.id);
        case LOAD_JEDIS:
            return action.payload.jedis.map(jedi => ({ ...jedi }));
        default:
            return state;
    }
}
