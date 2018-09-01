import { Injectable,EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Makhan', "Kana's favorite", "../../../assets/makhan.jpg"),
    new Recipe('Dahi', "Kavya's favorite", "../../../assets/Dahi.jpg")
  ]
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
