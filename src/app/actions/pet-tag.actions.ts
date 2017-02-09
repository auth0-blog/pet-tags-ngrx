import { Action } from '@ngrx/store';

export interface Action {
  type: string;
  payload?: any;
}
