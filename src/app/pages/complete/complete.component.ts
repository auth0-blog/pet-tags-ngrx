import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RESET } from './../../core/pet-tag.actions';
import { PetTag, initialTag } from './../../core/pet-tag.model';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription;
  petTag: PetTag;
  emptyTag: PetTag = initialTag;

  constructor(private store: Store<PetTag>, private auth: AuthService) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: RESET,
      payload: this.emptyTag
    });
  }

}
