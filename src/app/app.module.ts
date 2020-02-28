import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ImageService } from './image.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
