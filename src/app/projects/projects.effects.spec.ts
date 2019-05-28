import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';

import { ActivationEnd } from '@angular/router';
import { TitleService } from '@app/core';
import { ProjectsEffects } from './projects.effects';

describe('SettingsEffects', () => {
  let router: any;
  let titleService: jasmine.SpyObj<TitleService>;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {
          root: {}
        }
      },
      events: {
        pipe() {}
      }
    };

    titleService = jasmine.createSpyObj('TitleService', ['setTitle']);
  });

  describe('setTitle', () => {
    it('should setTitle', function() {

      const routerEvent = new ActivationEnd(router.routerState.snapshot);
      router.events = cold('a', { a: routerEvent });

      const effect = new ProjectsEffects(
        router,
        titleService
      );

      effect.setTitle.subscribe(() => {
        expect(titleService.setTitle).toHaveBeenCalled();
        expect(titleService.setTitle).toHaveBeenCalledWith(
          router.routerState.snapshot.root
        );
      });
    });
  });
});
