import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './core/app.component';
import { TagBuilderComponent } from './tag-builder/tag-builder.component';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './core/pet-tag.reducer';
import { TagPreviewComponent } from './tag-preview/tag-preview.component';
import { TagShapeComponent } from './tag-builder/tag-shape/tag-shape.component';
import { TagTextComponent } from './tag-builder/tag-text/tag-text.component';
import { TagExtrasComponent } from './tag-builder/tag-extras/tag-extras.component';

@NgModule({
  declarations: [
    AppComponent,
    TagBuilderComponent,
    TagPreviewComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ petTag: petTagReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
