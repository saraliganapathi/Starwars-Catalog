import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SWAPIcategoriesService {
  API_URL: string = "https://swapi.co/api/";
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<any[]>
      // ('https://swapi.co/api/?format=json');
    (this.API_URL + '?format=json');
  }

  getCategory(): Observable<string[]> {
    return this.httpClient.get<any[]>
    // ('https://swapi.co/api/people/?format=json');
    (this.API_URL+'/' + '${categories[i]}' + '/'+'?format=json');
  }

/*  getCategoryDetail(id: number): Observable<string[]> {
    return this.getCategory().subscribe(people => people.find(character => character.id === id));
    // ('https://swapi.co/api/people/?format=json');
    (this.API_URL+'/' + '${categories[i]}' + '/'+'?format=json');
  }*/
}

//
// getFilmId(filmId) : Observable<string[]> {
//   return this.httpClient.get<any[]>
//   (this.API_URL +'/' + '${categories[i]}'+ '/${filmId}' +'?format=json');
// }
