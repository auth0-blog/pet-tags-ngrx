import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.css']
})
export class TagTextComponent {
  tagTextInput = '';
  fontType = 'sans-serif';
  @Output() selectFontEvent = new EventEmitter;
  @Output() addTextEvent = new EventEmitter;

  constructor() { }

  selectFont(fontType: string) {
    this.selectFontEvent.emit(fontType);
  }

  addText(text: string) {
    this.addTextEvent.emit(text);
  }

}
