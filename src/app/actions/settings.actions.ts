import { createAction, props } from '@ngrx/store';

/**
* {
* type: '[settings] count goal changed',
* newGoal: 300
* }
*/

export const countGoalChanged = createAction(
  '[settings] count goal changed',
  props<{ newGoal: number }>()
)
