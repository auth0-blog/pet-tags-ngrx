import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './core/app.component';
import { TagBuilderComponent } from './tag-builder/tag-builder.component';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './reducers/pet-tag.reducer';
import { TagViewComponent } from './tag-view/tag-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TagBuilderComponent,
    TagViewComponent
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
