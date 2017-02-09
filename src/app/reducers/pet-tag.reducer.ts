import { ActionReducer, Action } from '@ngrx/store';

export const CREATE_TAG = 'CREATE_TAG';
export const SELECT_SHAPE = 'SELECT_SHAPE';
export const SELECT_FONT = 'SELECT_FONT';
export const ADD_TEXT = 'ADD_TEXT';
export const TOGGLE_GEMS = 'TOGGLE_GEMS';

export function petTagReducer(state = [], action: Action) {
  switch(action.type) {
    case CREATE_TAG: {
      return [action.payload];
    }
    case SELECT_SHAPE: {
      return state.map(tag => {
        return Object.assign({}, tag, {
          shape: action.payload
        });
      });
    }
    case SELECT_FONT: {
      return state.map(tag => {
        return Object.assign({}, tag, {
          font: action.payload
        });
      });
    }
    case ADD_TEXT: {
      return state.map(tag => {
        return Object.assign({}, tag, {
          text: action.payload
        });
      });
    }
    case TOGGLE_GEMS: {
      return state.map(tag => {
        return Object.assign({}, tag, {
          gems: !tag.gems
        });
      });
    }
    default:
      return state;
  }
}
