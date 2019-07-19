import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators/map';

import { SWAPIcategoriesService } from './SWAPIcategories.service';

import { Router } from '@angular/router';

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'my-app-people',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.css' ]
})

export class PeopleComponent implements OnInit {
  name = 'People SWAPI';
  people: any[];

  constructor(private SWAPICategoriesService: SWAPIcategoriesService) {}
  getCategory(): void {
    this.SWAPICategoriesService.getCategory().subscribe(people => this.people = people);
  }


  ngOnInit() {
    this.SWAPICategoriesService.getCategory().subscribe(people => {
      this.people = Object.keys(people);
    });
  }
}


