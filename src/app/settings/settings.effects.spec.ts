import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import {
  AnimationsService,
  TitleService
} from '@app/core';

import { SettingsEffects } from './settings.effects';

describe('SettingsEffects', () => {
  let router: any;
  let overlayContainer: jasmine.SpyObj<OverlayContainer>;
  let titleService: jasmine.SpyObj<TitleService>;
  let animationsService: jasmine.SpyObj<AnimationsService>;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {}
      },
      events: {
        pipe() {}
      }
    };
    overlayContainer = jasmine.createSpyObj('OverlayContainer', [
      'getContainerElement'
    ]);
    titleService = jasmine.createSpyObj('TitleService', ['setTitle']);
    animationsService = jasmine.createSpyObj('AnimationsService', [
      'updateRouteAnimationType'
    ]);
  });
});
