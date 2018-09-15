import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StylizeUploadComponent } from './stylize-upload/stylize-upload.component';
import { StylizeResultComponent } from './stylize-result/stylize-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    StylizeUploadComponent,
    StylizeResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
