import { Action } from '@ngrx/store';

export const pettag = (state = [], action: Action) => {
  switch(action.type) {
    case 'SELECT_SHAPE': {
      return [
        ...state,
        action.payload 
        ];
    }
    case 'SELECT_FONT': {
      return state;
    }
    case 'ADD_TEXT': {
      return state;
    }
    case 'TOGGLE_GEMS': {
      return state;
    }
    default: {
      return state;
    }
  }
};