import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  recipes: Array<Recipe>;
  newRecipe = new Recipe();



  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  addRecipe(recipe: Recipe){
    this.recipes.unshift(recipe);
    this.recipes = this.recipes.splice(0);
    this.newRecipe = new Recipe();
  }



}
