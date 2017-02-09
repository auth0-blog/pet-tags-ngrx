import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-builder',
  templateUrl: './tag-builder.component.html',
  styleUrls: ['./tag-builder.component.css']
})
export class TagBuilderComponent implements OnInit {
  shape: string;

  constructor() { }

  ngOnInit() {
  }

  pickShape(selectedShape) {
    this.shape = selectedShape;
  }

}
