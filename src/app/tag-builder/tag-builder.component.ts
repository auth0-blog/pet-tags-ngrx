import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-tag-builder',
  templateUrl: './tag-builder.component.html',
  styleUrls: ['./tag-builder.component.css']
})
export class TagBuilderComponent {
  tagState$: Observable<PetTag>
  petTag: PetTag;

  constructor(private _store: Store<PetTag>) {
    this.tagState$ = _store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

}
