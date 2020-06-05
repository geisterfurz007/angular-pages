import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandlineComponent } from './commandline/commandline.component';
import { PromptInputComponent } from './commandline/prompt-input/prompt-input.component';
import { LineComponent } from './commandline/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandlineComponent,
    PromptInputComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
