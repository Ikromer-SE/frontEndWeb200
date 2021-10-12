import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from 'rxjs/operators';
import * as actions from '../actions/settings.actions'

@Injectable()
export class SettingsEffects {

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an actions of type ${a.type}`))
  //   )
  //   , { dispatch: false }
  // );

  saveCountGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countGoalChanged), // only care this one... -> countGoalChanged Action
      map(a => a.newGoal), // countGoalChanges -> number
      map(a => a.toString()), // number => string
      tap(goal => localStorage.setItem('counterGoal', goal))
    ), { dispatch: false })

  constructor(private actions$: Actions) { }
}
