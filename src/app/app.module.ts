import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './core/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './core/pet-tag.reducer';
import { AuthService } from './core/auth.service';

import { AppComponent } from './core/app.component';
import { TagPreviewComponent } from './tag-preview/tag-preview.component';
import { TagShapeComponent } from './tag-builder/tag-shape/tag-shape.component';
import { TagTextComponent } from './tag-builder/tag-text/tag-text.component';
import { TagExtrasComponent } from './tag-builder/tag-extras/tag-extras.component';
import { HomeComponent } from './pages/home/home.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    TagPreviewComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent,
    HomeComponent,
    CompleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ petTag: petTagReducer }),
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
