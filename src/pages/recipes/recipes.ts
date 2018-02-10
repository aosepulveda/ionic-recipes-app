import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {RecipesService} from "../../services/recipes";
import {Recipe} from "../../models/recipe";
import {RecipePage} from "../recipe/recipe";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipesService: RecipesService) {
  }

  ionViewWillEnter() {
    this.loadRecipes();
  }

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {
      mode: 'New'
    });
  }

  onLoadRecipe(index: number, recipe: Recipe) {
    this.navCtrl.push(RecipePage, {
      index: index,
      recipe: recipe
    });
  }

  loadRecipes() {
    this.recipes = this.recipesService.getRecipes();
  }

}
