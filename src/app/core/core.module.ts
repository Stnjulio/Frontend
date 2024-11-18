// core/core.module.ts
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
  ],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
      ],
    };
  }
}
