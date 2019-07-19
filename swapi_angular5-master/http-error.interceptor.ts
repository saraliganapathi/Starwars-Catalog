/** @format */

import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

// App Configuration
import { httpErrorCodes } from '../config/app.config';

// App Models
import { ApiError } from './api-error.model';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (response) => {
          console.log('### HttpErrorInterceptor - response', response);
        },
        error => {
          console.log('### HttpErrorInterceptor - error:', error);
          // There may be other events besides the response error.
          if (error instanceof HttpErrorResponse) {
            const apiError: ApiError = error.error;
            let message = httpErrorCodes[apiError.code];

            if (message === undefined) {
              message = 'Something went wrong. Contact support.';
            }

            console.log('### Hello error:', message);
          }
        }
      )
    );
  }
}
