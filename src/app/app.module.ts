import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './core/app.component';
import { TagBuilderComponent } from './tag-builder/tag-builder.component';
import { TagBuilderShapeComponent } from './tag-builder/tag-builder-shape/tag-builder-shape.component';
import { TagBuilderTextComponent } from './tag-builder/tag-builder-text/tag-builder-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TagBuilderComponent,
    TagBuilderShapeComponent,
    TagBuilderTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
