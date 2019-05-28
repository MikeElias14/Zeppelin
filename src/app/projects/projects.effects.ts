import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { merge } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { TitleService } from '@app/core';

@Injectable()
export class ProjectsEffects {
  constructor(
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
        this.router.routerState.snapshot.root
      );
    })
  );
}
