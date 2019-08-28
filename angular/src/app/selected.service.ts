import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class SelectedService {


  selected: Recipe;

  constructor() { }
}
