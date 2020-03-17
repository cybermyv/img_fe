import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { ImageService } from './image.service';
import { ImageDetailComponent } from './image-detail/image-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
