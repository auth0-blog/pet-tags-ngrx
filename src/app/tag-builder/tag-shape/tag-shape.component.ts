import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SELECT_SHAPE } from './../../core/pet-tag.reducer';
import { PetTag } from './../../core/pet-tag.model';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.css']
})
export class TagShapeComponent {

  constructor(private store: Store<PetTag>) { }

  selectShape(shape: string) {
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
  }

}
