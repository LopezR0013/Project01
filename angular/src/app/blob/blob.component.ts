import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.css']
})
export class BlobComponent implements OnInit {


  @Input()
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
