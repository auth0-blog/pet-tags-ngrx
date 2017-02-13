import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css']
})
export class TagPreviewComponent implements OnInit {
  tagState$: Observable<PetTag>
  petTag: PetTag;
  imgSrc: string = '';
  tagClipText: string;
  gemsText: string;
  done: boolean = false;

  constructor(private _store: Store<PetTag>) {
    this.tagState$ = _store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state) => {
      this.petTag = state;
      this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
      this.tagClipText = this._boolToText(this.petTag.clip);
      this.gemsText = this._boolToText(this.petTag.gems);
      this.done = !!(this.petTag.shape && this.petTag.text)
    });
  }

  private _boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }

  submit() {
    console.log('Final tag:', this.petTag);
  }

}
