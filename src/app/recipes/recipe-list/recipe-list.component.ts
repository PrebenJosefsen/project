import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is a simple test recipe for demo', 'https://www.w3schools.com/images/w3schools_green.jpg'),
    new Recipe('A test recipe 2', 'This is a simple test recipe for demo', 'https://www.w3schools.com/images/w3schools_green.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
