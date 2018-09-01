import { Injectable,EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Makhan', 
                "Kana's favorite", 
                "../../../assets/makhan.jpg",
               [new Ingredient('Malai',100),
                new Ingredient('Milk', 500)
               ] ),
    new Recipe('Dahi', 
               "Kavya's favorite", 
               "../../../assets/Dahi.jpg",
               [new Ingredient('Milk',1000)
               ])
  ]
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
