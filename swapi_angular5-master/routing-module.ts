import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PeopleComponent} from "../people.component";
import {AppComponent} from "../app.component";

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'people', component: PeopleComponent },
   // { path: 'people', redirectTo: '/people/:id ', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule{ }
