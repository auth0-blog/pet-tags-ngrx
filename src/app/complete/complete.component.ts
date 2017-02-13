import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RESET } from './../core/pet-tag.reducer';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  tagState$: Observable<PetTag>
  petTag: PetTag;
  emptyTag: PetTag = {
    shape: '',
    font: 'sans-serif',
    text: '',
    clip: false,
    gems: false,
    complete: false
  };

  constructor(private _store: Store<PetTag>) {
    this.tagState$ = _store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  newTag() {
    this._store.dispatch({
      type: RESET,
      payload: this.emptyTag
    });
  }

}
