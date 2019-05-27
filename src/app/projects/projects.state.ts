import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

export const VENUE_NAME = 'projects';
export const selectProjects = createFeatureSelector<State, ProjectsState>(
  VENUE_NAME
);

// TODO: Can these empty interfaces and reducers go?
export const reducers: ActionReducerMap<ProjectsState> = {
};

export interface ProjectsState {
}

export interface State extends AppState {
  projects: ProjectsState;
}
