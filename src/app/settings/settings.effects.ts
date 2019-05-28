import { ActivationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Effect } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import {
  tap,
  filter
} from 'rxjs/operators';

import {
  AnimationsService,
  TitleService
} from '@app/core';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('anms-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private router: Router,
    private overlayContainer: OverlayContainer,
    private titleService: TitleService,
    private animationsService: AnimationsService
  ) {}


  @Effect({ dispatch: false })
  setTitle = merge(
    this.router.events.pipe(filter(event => event instanceof ActivationEnd))
  ).pipe(
    tap(() => {
      this.titleService.setTitle(
        this.router.routerState.snapshot.root
      );
    })
  );
}
