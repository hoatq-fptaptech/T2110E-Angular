import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:"",component:HomeComponent},
  {path:"category",component:CategoryComponent},
  {path:"register",component:RegisterComponent},
  {path:"weather",component:WeatherComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,MainmenuComponent,SidebarComponent,
    HomeComponent,CategoryComponent,RegisterComponent,WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
