import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSupportReport from './support.reducer';

export const featureName = 'supportFeature';

export interface SupportState {
  report: fromSupportReport.SupportReportState
}

export const reducers: ActionReducerMap<SupportState> = {
  report: fromSupportReport.reducer
}

//1. Feature Selector
const selectFeature = createFeatureSelector<SupportState>(featureName);

//2. Select Sub-feature (branch) of supportFeature module
const selectReportBranch = createSelector(
  selectFeature,
  b => b.report
);

//3. Any "helpers" (optional)

//4. What the component needs

//TODO: that returns a models.SupportModel
//TODO: that tells usif the data is loaded or not.
export const selectReportLoaded = createSelector(
  selectReportBranch,
  b => b.isLoaded
);
