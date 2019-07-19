import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeopleComponent } from './people.component';

import { SWAPIcategoriesService } from './SWAPIcategories.service'

import { httpInterceptorProviders } from './interceptors';
import {RoutingModule} from "./interceptors/routing-module";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
  declarations: [ AppComponent, HelloComponent, PeopleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [httpInterceptorProviders, SWAPIcategoriesService]
})
export class AppModule { }
