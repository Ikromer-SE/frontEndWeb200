import { Action } from "@ngrx/store";

export interface CounterState {
  current: number;
}

export const initialState: CounterState = {
  current: 42
}

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return state;
}
