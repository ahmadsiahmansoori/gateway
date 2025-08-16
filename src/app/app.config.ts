import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';


// export const PERSIAN_DATE_FORMATS = {
//   parse: { dateInput: 'YYYY/MM/DD' },
//   display: {
//     dateInput: 'YYYY/MM/DD',
//     monthYearLabel: 'YYYY MMM',
//     dateA11yLabel: 'YYYY/MM/DD',
//     monthYearA11yLabel: 'YYYY MMMM',
//   },
// };



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideNativeDateAdapter(), // <-- this fixes the "No provider" error
    // { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' }
  ]
};
