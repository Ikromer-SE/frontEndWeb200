import { ActionReducerMap, createSelector } from '@ngrx/store'
import * as fromCounter from './counter.reducer'
import * as fromSettings from './settings.reducer'

export interface AppState {
  counter: fromCounter.CounterState,
  settings: fromSettings.SettingsState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  settings: fromSettings.reducer
}

const selectCounterBranch = (state: AppState) => state.counter;
const selectSettingsBranch = (state: AppState) => state.settings;

export const selectCounterGoal = createSelector(
  selectSettingsBranch,
  b => b.counterGoal
)

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
