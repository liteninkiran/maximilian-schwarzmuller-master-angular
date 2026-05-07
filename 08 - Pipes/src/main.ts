import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeGb from '@angular/common/locales/en-GB';

registerLocaleData(localeGb);

bootstrapApplication(AppComponent, {
  providers: [{ provide: LOCALE_ID, useValue: 'en-GB' }],
}).catch((err) => console.error(err));
