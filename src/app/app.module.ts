// app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.routes';
import { CoreModule } from './core/core.module';

registerLocaleData(pt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    RouterModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
