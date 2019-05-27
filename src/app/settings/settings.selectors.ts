import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SettingsState, State } from './settings.model';

export const selectSettingsState = createFeatureSelector<State, SettingsState>(
  'settings'
);

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectSettingsStickyHeader = createSelector(
  selectSettings,
  (state: SettingsState) => true
);

export const selectEffectiveTheme = createSelector(
  theme => 'BLACK-THEME'.toLowerCase() //TODO
);

