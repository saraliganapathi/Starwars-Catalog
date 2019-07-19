import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators/map';

import { SWAPIcategoriesService } from './SWAPIcategories.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'SWAPI CA using Angular 5';
  categories: any[];

  constructor(private SWAPIcategoriesService: SWAPIcategoriesService) {}

  ngOnInit() {
    this.SWAPIcategoriesService.getCategories().subscribe(categories => {
      this.categories = Object.keys(categories);
    });
  }
}

