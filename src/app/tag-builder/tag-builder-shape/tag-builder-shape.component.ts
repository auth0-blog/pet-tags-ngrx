import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-builder-shape',
  templateUrl: './tag-builder-shape.component.html',
  styleUrls: ['./tag-builder-shape.component.css']
})
export class TagBuilderShapeComponent implements OnInit {
  shape: string;

  constructor() { }

  ngOnInit() {
  }

  pickShape(selectedShape) {
    this.shape = selectedShape;
  }

}
