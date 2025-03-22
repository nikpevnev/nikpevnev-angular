import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  prefixURL: string = 'https://cdn-xprs.azurewebsites.net/';

}
