import { Injectable } from '@angular/core';
import {BeerType} from "./model/beer-type";
import {Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  water: number;
  sugar: number;
  yeast: number;
  hop: number;

  constructor() {
    //początkowy stan magazynu:
    this.water = 100;
    this.sugar = 100;
    this.yeast = 100;
    this.hop = 100;
  }

  /**
   * Odpowiada czy w magazynie jest dość składników na `quantity` jednostek piwa
   * typu `beerType`.
   */
  ingredientsAvailable(beerType: BeerType, quantity: number) : boolean {
    console.log(`Sprawdzam składniki na ilość ${quantity} piwa typu ${beerType.name} `);
    return quantity < 10;
  }

  /**
   * Zamawia w magazynie składniki na `quantity` (hektolitrów) piwa
   * typu `beerType`. Ilość składników w magazynie powinna się zmiejszyć.
   */
  ingredientsOrder(beerType: BeerType, quantity: number) {
    console.log(`Pobieram składniki na ilość ${quantity} piwa typu ${beerType.name} `);
    //odejmujemy składniki transportując je do hali piwowarczej...
    this.water -= quantity * beerType.water;  //zabieamy wodę...
    this.sugar -= quantity * beerType.sugar;
    this.yeast -= quantity * beerType.yeast;
    this.hop -= quantity * beerType.hop;
  }

  /**
   * Funkcja realizująca akcję dopełnienia magazynu nowymi składnikami.
   * @param ingredientName
   * @param quantity
   */
  ingredientShipmentArrival(ingredientName: string, quantity: number) {



    //todo: dodać odpowiedni składnik

    if (ingredientName === 'water') {
      this.water += quantity;}
      if(this.water > 200){
        this.water = 200;
      }


    if (ingredientName === 'sugar'){
      this.sugar += quantity ;
      if(this.sugar > 200){
        this.sugar = 200;
      }
    }

    if (ingredientName === 'yeast'){
      this.yeast += quantity ;}
    if(this.yeast > 200){
      this.yeast = 200;
    }
    if (ingredientName === 'hop') {

      this.hop += quantity ;}
    if(this.hop > 200){
      this.hop = 200;
    }

  }
}
