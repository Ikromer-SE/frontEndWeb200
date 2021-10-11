import { Action, createReducer } from "@ngrx/store"

export interface SettingsState {
  counterGoal: number;
}

const initialState: SettingsState = {
  counterGoal: 100
}

const reducerFunction = createReducer(
  initialState
)

export function reducer(state: SettingsState = initialState, action: Action): SettingsState {
  return reducerFunction(state, action);
}
