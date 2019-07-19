/** @format */

import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/observable/throw';

// App Configuration
import { httpErrorCodes } from '../config/app.config';

// App Models
import { ApiError } from './api-error.model';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class CustomErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (response) => {
          if (response instanceof HttpResponse) {
            // There may be other events besides the response error.
            console.log('### CustomErrorInterceptor - response', response);

            return Observable.throw({
              error: 'foo error'
            })  
            // return ErrorObservable.create({ foo: 'bar' });
          }
        },
        error => {}
      )
    );
  }
}
