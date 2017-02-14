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

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state: PetTag) => {
      this.petTag = state;
      this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
      this.tagClipText = this.boolToText(this.petTag.clip);
      this.gemsText = this.boolToText(this.petTag.gems);
    });
  }

  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }

}
