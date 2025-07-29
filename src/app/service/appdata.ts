import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  members = Array<Members>();
  constructor() { }
}

export class Members {
  id : number = 0;
  fullname : string = '';
  image : string = '';
}
