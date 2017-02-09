import { ActionReducer, Action } from '@ngrx/store';

export const SELECT_SHAPE = 'SELECT_SHAPE';
export const SELECT_FONT = 'SELECT_FONT';
export const ADD_TEXT = 'ADD_TEXT';
export const TOGGLE_GEMS = 'TOGGLE_GEMS';

export function petTagReducer(state = [], action: Action) {
  switch(action.type) {
    case SELECT_SHAPE: {
      return [
        ...state,
        action.payload 
        ];
    }
    case SELECT_FONT: {
      return state;
    }
    case ADD_TEXT: {
      return state;
    }
    case TOGGLE_GEMS: {
      return state;
    }
    default:
      return state;
  }
}
