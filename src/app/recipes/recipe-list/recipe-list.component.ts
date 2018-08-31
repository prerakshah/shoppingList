import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Makhan', "Kana's favorite", "../../../assets/makhan.jpg"),
    new Recipe('Dahi', "Kavya's favorite", "../../../assets/Dahi.jpg")
  ]
  constructor() { }
   ngOnInit() {
  }
  recipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
