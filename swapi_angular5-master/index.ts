/**
 * "Barrel" of Http Interceptors
 *
 * @format
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { CustomErrorInterceptor } from './custom-error.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CustomErrorInterceptor, multi: true },
];
