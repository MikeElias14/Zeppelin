import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { merge } from 'rxjs';
import { tap, map, distinctUntilChanged, filter } from 'rxjs/operators';

import { TitleService } from '@app/core';

@Injectable()
export class ProjectsEffects {
  constructor(
    private store: Store<State>,
    private translateService: TranslateService,
    private router: Router,
    private titleService: TitleService
  ) {}

  @Effect({ dispatch: false })

  @Effect({ dispatch: false })
  setTitle = merge(
    this.router.events.pipe(filter(event => event instanceof ActivationEnd))
  ).pipe(
    tap(() => {
      this.titleService.setTitle(
        this.router.routerState.snapshot.root,
        this.translateService
      );
    })
  );
}
