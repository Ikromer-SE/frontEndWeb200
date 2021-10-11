import { Action, createReducer, on } from "@ngrx/store"
import * as actions from '../actions/settings.actions';

export interface SettingsState {
  counterGoal: number;
}

const initialState: SettingsState = {
  counterGoal: 100
}

const reducerFunction = createReducer(
  initialState,
  on(actions.countGoalChanged, (s, a) => ({ ...s, counterGoal: a.newGoal }))
)

export function reducer(state: SettingsState = initialState, action: Action): SettingsState {
  return reducerFunction(state, action);
}
