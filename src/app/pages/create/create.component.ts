import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { COMPLETE } from './../../core/pet-tag.reducer';
import { PetTag } from './../../core/pet-tag.model';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  tagState$: Observable<PetTag>
  petTag: PetTag;
  done: boolean = false;

  constructor(private store: Store<PetTag>, private auth: AuthService) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state: PetTag) => {
      this.petTag = state;
      this.done = !!(this.petTag.shape && this.petTag.text)
    });
  }

  submit() {
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    });
  }

}
