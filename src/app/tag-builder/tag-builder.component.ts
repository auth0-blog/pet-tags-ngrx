import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, INCLUDE_CLIP } from './../reducers/pet-tag.reducer';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-tag-builder',
  templateUrl: './tag-builder.component.html',
  styleUrls: ['./tag-builder.component.css']
})
export class TagBuilderComponent {
  tagTextInput: string = '';

  constructor(private _store: Store<PetTag>) {}

  selectShape(shape) {
    this._store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
  }

  selectFont(font) {
    this._store.dispatch({
      type: SELECT_FONT,
      payload: font
    });
  }

  addText(text) {
    this._store.dispatch({
      type: ADD_TEXT,
      payload: text
    });
  }

  includeClip(clip) {
    this._store.dispatch({
      type: INCLUDE_CLIP,
      payload: clip
    });
  }

}
