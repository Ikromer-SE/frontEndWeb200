import { ActionReducerMap } from '@ngrx/store'
import * as fromCounter from './counter.reducer'

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}

export function selectCounterCurrent(state: AppState) {
  return state.counter.current;
}

export function selectResetDisabled(state: AppState) {
  return state.counter.current === 0;
}
