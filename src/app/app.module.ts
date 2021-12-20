import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DemoComponent} from "./demo/demo.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,ClassroomComponent,StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
