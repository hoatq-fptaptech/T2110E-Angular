import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";

const appRoutes: Routes = [
  {path:"",component:HomeComponent},
  {path:"category",component:CategoryComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,MainmenuComponent,SidebarComponent,
    HomeComponent,CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
