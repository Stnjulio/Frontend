// src/app/app.route.loader.ts
import { PreloadingStrategy, Route } from '@angular/router'
import { Observable, of } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class AppPreRoute implements PreloadingStrategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preload(route: Route, load: () => any): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
