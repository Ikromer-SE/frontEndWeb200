import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { tap } from 'rxjs/operators';

@Injectable()
export class SettingsEffects {

  logThemAll$ = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(`Got an actions of type ${a.type}`))
    )
    , { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
