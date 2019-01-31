import {Injectable} from '@angular/core';


export const mockHeroes   = ['Sam', 'Jill']; // prefer
export const heroesUrl    = 'api/heroes';    // prefer
export const VILLAINS_URL = 'api/villains';  // tolerate

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() {
  }
}
