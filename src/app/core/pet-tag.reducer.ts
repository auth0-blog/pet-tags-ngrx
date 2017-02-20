import { Action } from '@ngrx/store';
import { PetTag, initialTag } from './../core/pet-tag.model';

// Export action types
export const SELECT_SHAPE = 'SELECT_SHAPE';
export const SELECT_FONT = 'SELECT_FONT';
export const ADD_TEXT = 'ADD_TEXT';
export const INCLUDE_CLIP = 'INCLUDE_CLIP';
export const ADD_GEMS = 'ADD_GEMS';
export const COMPLETE = 'COMPLETE';
export const RESET = 'RESET';

// Create pet tag reducer
export function petTagReducer(state: PetTag = initialTag, action: Action) {
  switch(action.type) {
    case SELECT_SHAPE:
      return Object.assign({}, state, {
        shape: action.payload
      });
    case SELECT_FONT:
      return Object.assign({}, state, {
        font: action.payload
      });
    case ADD_TEXT:
      return Object.assign({}, state, {
        text: action.payload
      });
    case INCLUDE_CLIP:
      return Object.assign({}, state, {
        clip: action.payload
      });
    case ADD_GEMS:
      return Object.assign({}, state, {
        gems: action.payload
      });
    case COMPLETE:
      return Object.assign({}, state, {
        complete: action.payload
      });
    case RESET:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
