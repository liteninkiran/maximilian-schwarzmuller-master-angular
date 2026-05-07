import { Injectable } from '@angular/core';

const options: Intl.DateTimeFormatOptions = {
  dateStyle: 'full',
  timeStyle: 'full',
};

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(message: string) {
    const timestamp = new Date().toLocaleString('en-GB', options);
    console.log(`[${timestamp}]: ${message}`);
  }
}
