import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CREATE_TAG, SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_GEMS } from './../../reducers/pet-tag.reducer';
import { PetTag } from './../../core/pet-tag.model';

@Component({
  selector: 'app-tag-builder-shape',
  templateUrl: './tag-builder-shape.component.html',
  styleUrls: ['./tag-builder-shape.component.css']
})
export class TagBuilderShapeComponent implements OnInit {
  petTag$: Observable<PetTag>

  constructor(private store: Store<any>) {
    this.petTag$ = store.select('petTag');
  }

  ngOnInit() {
    this.petTag$.subscribe((state) => {
      console.log(state);
    });
  }

  createTag() {
    this.store.dispatch({ 
      type: CREATE_TAG, 
      payload: {
        shape: '',
        font: '',
        text: '',
        gems: false
      }
    });
  }

  selectShape(shape) {
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
  }

  selectFont(font) {
    this.store.dispatch({
      type: SELECT_FONT,
      payload: font
    });
  }

}
