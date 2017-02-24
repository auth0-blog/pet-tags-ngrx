import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css']
})
export class TagPreviewComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  tagStateSubscription;
  petTag: PetTag;
  imgSrc: string = '';
  tagClipText: string;
  gemsText: string;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
      this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
      this.tagClipText = this.boolToText(this.petTag.clip);
      this.gemsText = this.boolToText(this.petTag.gems);
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }

}
