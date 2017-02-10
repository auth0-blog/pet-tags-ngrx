import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, INCLUDE_CLIP } from './../../reducers/pet-tag.reducer';
import { PetTag } from './../../core/pet-tag.model';

@Component({
  selector: 'app-tag-builder-shape',
  templateUrl: './tag-builder-shape.component.html',
  styleUrls: ['./tag-builder-shape.component.css']
})
export class TagBuilderShapeComponent implements OnInit {
  tagState$: Observable<PetTag>
  petTag: PetTag;
  tagTextInput: string = '';

  constructor(private _store: Store<PetTag>) {
    this.tagState$ = _store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

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
