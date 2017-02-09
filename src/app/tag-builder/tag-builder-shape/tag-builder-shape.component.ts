import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_GEMS } from './../../reducers/pet-tag.reducer';

@Component({
  selector: 'app-tag-builder-shape',
  templateUrl: './tag-builder-shape.component.html',
  styleUrls: ['./tag-builder-shape.component.css']
})
export class TagBuilderShapeComponent implements OnInit {
  
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  selectShape(shape) {
    this.store.dispatch({ type: SELECT_SHAPE, payload: shape })
  }

}
