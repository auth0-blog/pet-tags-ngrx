import { ActionReducer, Action } from '@ngrx/store';
import { PetTag } from './../core/pet-tag.model';

export const SELECT_SHAPE = 'SELECT_SHAPE';
export const SELECT_FONT = 'SELECT_FONT';
export const ADD_TEXT = 'ADD_TEXT';
export const INCLUDE_CLIP = 'INCLUDE_CLIP';

export function petTagReducer(
  state: PetTag = {
    shape: '',
    font: 'sans-serif',
    text: '',
    clip: false
  },
  action: Action) {
    switch(action.type) {
      case SELECT_SHAPE: {
        return Object.assign({}, state, {
          shape: action.payload
        });
      }
      case SELECT_FONT: {
        return Object.assign({}, state, {
          font: action.payload
        });
      }
      case ADD_TEXT: {
        return Object.assign({}, state, {
          text: action.payload
        });
      }
      case INCLUDE_CLIP: {
        return Object.assign({}, state, {
          clip: action.payload
        });
      }
      default:
        return state;
  }
}
