import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';

import {
  State
} from '@app/settings';
import { ActivationEnd } from '@angular/router';
import { TitleService } from '@app/core';
import { ProjectsEffects } from './projects.effects';

describe('SettingsEffects', () => {
  let router: any;
  let titleService: jasmine.SpyObj<TitleService>;
  let translateService: jasmine.SpyObj<TranslateService>;
  let store: jasmine.SpyObj<Store<State>>;

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
    translateService = jasmine.createSpyObj('TranslateService', ['use']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('setTitle', () => {
    it('should setTitle', function() {

      const routerEvent = new ActivationEnd(router.routerState.snapshot);
      router.events = cold('a', { a: routerEvent });

      const effect = new ProjectsEffects(
        store,
        translateService,
        router,
        titleService
      );

      effect.setTitle.subscribe(() => {
        expect(titleService.setTitle).toHaveBeenCalled();
        expect(titleService.setTitle).toHaveBeenCalledWith(
          router.routerState.snapshot.root,
          translateService
        );
      });
    });
  });
});
