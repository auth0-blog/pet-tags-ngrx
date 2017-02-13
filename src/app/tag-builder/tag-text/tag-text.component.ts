import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SELECT_FONT, ADD_TEXT } from './../../core/pet-tag.reducer';
import { PetTag } from './../../core/pet-tag.model';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.css']
})
export class TagTextComponent {
  tagTextInput: string = '';
  fontType: string = 'sans-serif';

  constructor(private store: Store<PetTag>) {}

  selectFont(font: string) {
    this.store.dispatch({
      type: SELECT_FONT,
      payload: font
    });
  }

  addText(text: string) {
    this.store.dispatch({
      type: ADD_TEXT,
      payload: text
    });
  }

}
