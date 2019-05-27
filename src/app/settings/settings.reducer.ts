import { SettingsState } from './settings.model';

export const initialState: SettingsState = {
  theme:  'BLACK-THEME',
  stickyHeader: true,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true
};

export function settingsReducer(
  state: SettingsState = initialState,
): SettingsState {
    return state;
}
