import { ActionReducerMap, createSelector } from '@ngrx/store'
import * as fromCounter from './counter.reducer'

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}

const selectCounterBranch = (state: AppState) => state.counter;

export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
)

export const selectCountToGoal = createSelector(
  selectCounterCurrent,
  (current) => 100 - current
)
