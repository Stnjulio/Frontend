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

  constructor() {
   
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('skip')) return next.handle(req);

    const headers: { [key: string]: string } = {}; // Tipagem ajustada para string
    let authReq = null;

    // Copiar todos os headers da requisição original
    for (const header of req.headers.keys()) {
      const value = req.headers.get(header);
      if (value) {
        headers[header] = value; // Apenas atribuir se o valor não for null
      }
    }

    // Adicionar o header 'Authorization' se não estiver presente
    if (!headers['authorization']) {
      headers['authorization'] = `bearer ${this.token}`; // Garante que o valor seja string
    }

    // Clonar a requisição com os headers ajustados
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
