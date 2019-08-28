export class Recipe {


    name: string;
    imageUrl: string;
    category: string;
    ingredients: string;
    directions: string;


    constructor( name: string = '', imageUrl: string = '', category: string = '', ingredients: string = '', directions:string = ''){
        this.name = name;
        this.imageUrl = imageUrl;
        this.category = category;
        this.ingredients = ingredients;
        this.directions = directions;
    }
}


