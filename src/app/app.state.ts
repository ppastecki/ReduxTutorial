import { Jedi } from './jedi/jedi.models';

export interface AppState {
    counter: number;
    jedis: Array<Jedi>;
}
