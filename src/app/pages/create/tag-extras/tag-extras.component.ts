import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-extras',
  templateUrl: './tag-extras.component.html',
  styleUrls: ['./tag-extras.component.css']
})
export class TagExtrasComponent {
  tagClip: boolean;
  gems: boolean;
  @Output() includeClipEvent = new EventEmitter;
  @Output() addGemsEvent = new EventEmitter;

  constructor() { }

  includeClip() {
    this.includeClipEvent.emit();
  }

  addGems() {
    this.addGemsEvent.emit();
  }
}
