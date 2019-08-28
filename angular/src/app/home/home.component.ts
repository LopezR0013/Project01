import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { SelectedService } from '../selected.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  recipes: Array<Recipe>;
  newRecipe = new Recipe();



  constructor(private recipeService: RecipeService,private sel: SelectedService, private rout: Router) { }
  search: string;
  foodList: Array<Recipe> = this.recipeService.recipes;

  redirect(recipe) {
    this.sel.selected=recipe;
    this.rout.navigate(['profile']);
  }

  searchfunc(search){
    console.log(search);
  }
  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }
 

  

}
