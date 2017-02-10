import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.css']
})
export class TagViewComponent implements OnInit {
  tagState$: Observable<PetTag>
  petTag: PetTag;
  imgSrc: string = '';
  tagClipText: string;

  constructor(private _store: Store<PetTag>) {
    this.tagState$ = _store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state) => {
      this.petTag = state;
      this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
      this.tagClipText = this.petTag.clip ? 'Yes' : 'No';
    });
  }

}
