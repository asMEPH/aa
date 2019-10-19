import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  water: number;
  sugar: number;
  yeast: number;
  hop: number;

  constructor() {
    this.water = 100;
    this.sugar =100;
    this.yeast = 100;
    this.hop = 100;
  }

  ingredientsAvailable()

}
