// src/app/core/interceptors/http-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  token!: string | undefined;
  exp_token!: number | undefined;

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.headers.get('skip')) return next.handle(req);

    const headers: Record<string, string> = {};
    let authReq = null;

    for (const header of req.headers.keys()) {
      const value = req.headers.get(header);
      if (value) {
        headers[header] = value;
      }
    }

    if (!headers['authorization']) {
      headers['authorization'] = `bearer ${this.token}`;
    }

    authReq = req.clone({
      setHeaders: headers,
    });

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        const error = err.error || err.statusText;
        return throwError(() => error);
      })
    );
  }
}

