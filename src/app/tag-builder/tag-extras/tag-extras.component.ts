import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCLUDE_CLIP, ADD_GEMS } from './../../core/pet-tag.actions';
import { PetTag } from './../../core/pet-tag.model';

@Component({
  selector: 'app-tag-extras',
  templateUrl: './tag-extras.component.html',
  styleUrls: ['./tag-extras.component.css']
})
export class TagExtrasComponent {

  constructor(private store: Store<PetTag>) { }

  includeClip(clip: boolean) {
    this.store.dispatch({
      type: INCLUDE_CLIP,
      payload: clip
    });
  }

  addGems(gems: boolean) {
    this.store.dispatch({
      type: ADD_GEMS,
      payload: gems
    });
  }

}
