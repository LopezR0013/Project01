import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Array<Recipe> = [

    new Recipe( 'burrito' , 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_breakfast-burrito_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382542427230.jpeg' , 'Dinner' , 'What ever is in the fridge' , 'Throw everying in the fridge'),
    new Recipe( 'cereal' , 'https://www.motherjones.com/wp-content/uploads/2018/08/GettyImages-6043821081.jpg?w=990' , 'Breakfast' , 'Milk and ceral' , 'put the milk in the cereal bowl'),
    new Recipe( 'Spread' , 'https://pbs.twimg.com/media/BlEGNWUCYAApqfU.jpg' , 'Dinner' , 'top ramen and cheetos' , 'dry the cook top ramen and put it ontop of cheetos')

]

  constructor() { }
}
