export interface Counter {
    title: string;
    id: number;
}

export interface CounterState {
    count: number;
    counters: Array<Counter>;
}
