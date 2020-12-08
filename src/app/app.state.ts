import { CounterState } from './counter/counter.models';
import { JediState } from './jedi/jedi.models';

export interface AppState {
    counter: CounterState;
    jedi: JediState;
}
